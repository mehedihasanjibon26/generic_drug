import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  slug: string;
  name: string;
  subtitle: string;
  pack: string;
  image: string;
  price: number;
  quantity: number;
};

type AddCartItem = Omit<CartItem, "quantity">;

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;

  addItem: (item: AddCartItem, quantity?: number) => void;

  updateQuantity: (slug: string, quantity: number) => void;

  removeItem: (slug: string) => void;
  clearCart: () => void;
  isInCart: (slug: string) => boolean;

  prescriptionFile: File | null;
  prescriptionPreviewUrl: string;
  setPrescription: (file: File) => void;
  removePrescription: () => void;

  couponCode: string;
  discount: number;
  applyCoupon: (code: string) => boolean;
  clearCoupon: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const CART_STORAGE_KEY = "generic-drug-cart";
const COUPON_STORAGE_KEY = "generic-drug-coupon";

function loadInitialCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);

    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadInitialCoupon() {
  try {
    return localStorage.getItem(COUPON_STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadInitialCart);

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);

  const [prescriptionPreviewUrl, setPrescriptionPreviewUrl] = useState("");

  const [couponCode, setCouponCode] = useState(loadInitialCoupon);

  const discount = couponCode === "GENERIC10" ? 10 : 0;

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (couponCode) {
      localStorage.setItem(COUPON_STORAGE_KEY, couponCode);
    } else {
      localStorage.removeItem(COUPON_STORAGE_KEY);
    }
  }, [couponCode]);

  useEffect(() => {
    return () => {
      if (prescriptionPreviewUrl) {
        URL.revokeObjectURL(prescriptionPreviewUrl);
      }
    };
  }, [prescriptionPreviewUrl]);

  const addItem = (item: AddCartItem, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((cartItem) => cartItem.slug === item.slug);

      if (existing) {
        return current.map((cartItem) =>
          cartItem.slug === item.slug
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
              }
            : cartItem,
        );
      }

      return [
        ...current,
        {
          ...item,
          quantity,
        },
      ];
    });
  };

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity < 1) {
      return;
    }

    setItems((current) =>
      current.map((item) =>
        item.slug === slug
          ? {
              ...item,
              quantity,
            }
          : item,
      ),
    );
  };

  const removeItem = (slug: string) => {
    setItems((current) => current.filter((item) => item.slug !== slug));
  };

  const clearCart = () => {
    setItems([]);
  };

  const isInCart = (slug: string) => items.some((item) => item.slug === slug);

  const itemCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  const setPrescription = (file: File) => {
    if (prescriptionPreviewUrl) {
      URL.revokeObjectURL(prescriptionPreviewUrl);
    }

    setPrescriptionFile(file);

    if (file.type.startsWith("image/")) {
      setPrescriptionPreviewUrl(URL.createObjectURL(file));
    } else {
      setPrescriptionPreviewUrl("");
    }
  };

  const removePrescription = () => {
    if (prescriptionPreviewUrl) {
      URL.revokeObjectURL(prescriptionPreviewUrl);
    }

    setPrescriptionFile(null);
    setPrescriptionPreviewUrl("");
  };

  const applyCoupon = (code: string) => {
    const normalized = code.trim().toUpperCase();

    if (normalized === "GENERIC10") {
      setCouponCode(normalized);
      return true;
    }

    setCouponCode("");
    return false;
  };

  const clearCoupon = () => {
    setCouponCode("");
  };

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        isInCart,
        prescriptionFile,
        prescriptionPreviewUrl,
        setPrescription,
        removePrescription,
        couponCode,
        discount,
        applyCoupon,
        clearCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
