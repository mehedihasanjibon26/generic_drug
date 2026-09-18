import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Plus,
  Search,
  Star,
} from "lucide-react";

import tyrosineImage from "@/assets/images/products/tyrosine.png";
import nitrileGlovesImage from "@/assets/images/products/nitrile-gloves.png";
import amberVitaminsImage from "@/assets/images/products/amber-vitamins.png";

type Product = {
  id: number;
  category: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  highlighted?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    category: "Nutrition",
    name: "Dietary Supplement Health Products",
    image: tyrosineImage,
    price: 64,
    oldPrice: 80,
    discount: "20% Off",
  },
  {
    id: 2,
    category: "Healthcare",
    name: "Nitrile Disposable gloves 100",
    image: nitrileGlovesImage,
    price: 140,
    highlighted: true,
  },
  {
    id: 3,
    category: "Medicine",
    name: "Womens multi Vitamins A, Biotin- cranberry",
    image: amberVitaminsImage,
    price: 64,
    oldPrice: 80,
    discount: "50% Off",
  },

  {
    id: 4,
    category: "Healthcare",
    name: "Nitrile Disposable gloves 100",
    image: nitrileGlovesImage,
    price: 140,
    highlighted: true,
  },
  {
    id: 5,
    category: "Nutrition",
    name: "Dietary Supplement Health Products",
    image: tyrosineImage,
    price: 64,
    oldPrice: 80,
    discount: "20% Off",
  },
  {
    id: 6,
    category: "Medicine",
    name: "Womens multi Vitamins A, Biotin- cranberry",
    image: amberVitaminsImage,
    price: 64,
    oldPrice: 80,
    discount: "50% Off",
  },

  {
    id: 7,
    category: "Nutrition",
    name: "Dietary Supplement Health Products",
    image: tyrosineImage,
    price: 64,
    oldPrice: 80,
    discount: "20% Off",
  },
  {
    id: 8,
    category: "Medicine",
    name: "Womens multi Vitamins A, Biotin- cranberry",
    image: amberVitaminsImage,
    price: 64,
    oldPrice: 80,
    discount: "50% Off",
  },
  {
    id: 9,
    category: "Healthcare",
    name: "Nitrile Disposable gloves 100",
    image: nitrileGlovesImage,
    price: 140,
    highlighted: true,
  },

  {
    id: 10,
    category: "Nutrition",
    name: "Dietary Supplement Health Products",
    image: tyrosineImage,
    price: 64,
    oldPrice: 80,
    discount: "20% Off",
  },
  {
    id: 11,
    category: "Healthcare",
    name: "Nitrile Disposable gloves 100",
    image: nitrileGlovesImage,
    price: 140,
    highlighted: true,
  },
  {
    id: 12,
    category: "Medicine",
    name: "Womens multi Vitamins A, Biotin- cranberry",
    image: amberVitaminsImage,
    price: 64,
    oldPrice: 80,
    discount: "50% Off",
  },
];

export default function MedicationProductListing() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("default");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [page, setPage] = useState(1);
  const [addedItems, setAddedItems] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (category !== "All Categories") {
      result = result.filter((product) => product.category === category);
    }

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [search, category, sort]);

  const toggleCart = (productId: number) => {
    setAddedItems((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  return (
    <div
      className="
        flex
        w-full
        max-w-[1056px]
        flex-1
        flex-col
        items-start
        gap-[32px]
      "
    >
      {/* Cards + Header */}
      <div
        className="
          flex w-full
          flex-col
          items-start
          gap-[24px]
        "
      >
        {/* Toolbar */}
        <div className="flex w-full items-center gap-[16px]">
          <p
            className="
              w-[240px]
              shrink-0
              text-[14px]
              text-[#66727A]
            "
          >
            Showing:{" "}
            <span className="font-medium text-[#283238]">(200Items)</span>
          </p>

          <div
            className="
              flex h-[40px]
              min-w-0
              flex-1
              items-center
              rounded-full
              bg-white
              pl-[18px]
            "
          >
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              className="
                h-full min-w-0 flex-1
                bg-transparent
                text-[14px]
                text-[#30373C]
                outline-none
                placeholder:text-[#747B80]
              "
            />

            <div
              className="
                relative
                flex h-full
                items-center
                border-l border-[#E1E6E9]
              "
            >
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="
                  h-full
                  appearance-none
                  bg-transparent
                  pl-[16px]
                  pr-[36px]
                  text-[13px]
                  text-[#626A70]
                  outline-none
                "
              >
                <option>All Categories</option>
                <option>Nutrition</option>
                <option>Healthcare</option>
                <option>Medicine</option>
              </select>

              <ChevronDown
                size={15}
                strokeWidth={1.8}
                className="
                  pointer-events-none
                  absolute right-[12px]
                  text-[#59646A]
                "
              />
            </div>

            <button
              type="button"
              aria-label="Search products"
              className="
                mr-[4px]
                flex h-[34px] w-[34px]
                shrink-0
                items-center
                justify-center
                rounded-full
                border-l border-[#E0E6E9]
                text-[#5B676D]
              "
            >
              <Search size={18} strokeWidth={1.7} />
            </button>
          </div>

          {/* View switch */}
          <div
            className="
              flex h-[40px]
              shrink-0
              items-center
              rounded-full
              bg-white
              p-[4px]
            "
          >
            <button
              type="button"
              aria-label="Grid view"
              onClick={() => setView("grid")}
              className={`
                flex h-[32px] w-[34px]
                items-center justify-center
                rounded-full
                ${
                  view === "grid"
                    ? "bg-[#F0F6F8] text-[#1D3355]"
                    : "text-[#758087]"
                }
              `}
            >
              <span className="grid grid-cols-2 gap-[3px]">
                <span className="h-[5px] w-[5px] rounded-[1px] border border-current" />
                <span className="h-[5px] w-[5px] rounded-[1px] border border-current" />
                <span className="h-[5px] w-[5px] rounded-[1px] border border-current" />
                <span className="h-[5px] w-[5px] rounded-[1px] border border-current" />
              </span>
            </button>

            <button
              type="button"
              aria-label="List view"
              onClick={() => setView("list")}
              className={`
                flex h-[32px] w-[34px]
                items-center justify-center
                rounded-full
                ${
                  view === "list"
                    ? "bg-[#F0F6F8] text-[#1D3355]"
                    : "text-[#758087]"
                }
              `}
            >
              <span className="space-y-[4px]">
                <span className="block h-[2px] w-[14px] rounded-full bg-current" />
                <span className="block h-[2px] w-[14px] rounded-full bg-current" />
                <span className="block h-[2px] w-[14px] rounded-full bg-current" />
              </span>
            </button>
          </div>

          {/* Sort */}
          <div className="relative h-[40px] w-[110px] shrink-0">
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="
                h-full w-full
                appearance-none
                rounded-full
                bg-white
                pl-[18px]
                pr-[34px]
                text-[13px]
                text-[#626A70]
                outline-none
              "
            >
              <option value="default">Sort By</option>
              <option value="price-low">Price Low</option>
              <option value="price-high">Price High</option>
              <option value="name">Name</option>
            </select>

            <ChevronDown
              size={15}
              strokeWidth={1.8}
              className="
                pointer-events-none
                absolute
                right-[13px]
                top-1/2
                -translate-y-1/2
                text-[#59646A]
              "
            />
          </div>
        </div>

        {/* Products */}
        <div
          className={
            view === "grid"
              ? "grid w-full grid-cols-3 gap-[24px]"
              : "flex w-full flex-col gap-[20px]"
          }
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              listView={view === "list"}
              added={addedItems.includes(product.id)}
              onCart={() => toggleCart(product.id)}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div
        className="
          flex h-[68px]
          w-full
          items-center
          justify-between
          rounded-[12px]
          bg-white
          p-[16px]
        "
      >
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          className="
            flex h-[36px]
            items-center gap-[9px]
            rounded-full
            border border-[#DEE3E8]
            px-[14px]
            text-[13px]
            font-medium
            text-[#323B41]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ArrowLeft size={15} strokeWidth={1.8} />
          Previous
        </button>

        <div className="flex items-center gap-[22px]">
          {[1, 2, 3].map((number) => (
            <PageButton
              key={number}
              number={number}
              page={page}
              setPage={setPage}
            />
          ))}

          <span className="text-[13px] text-[#56636A]">...</span>

          {[8, 9, 10].map((number) => (
            <PageButton
              key={number}
              number={number}
              page={page}
              setPage={setPage}
            />
          ))}
        </div>

        <button
          type="button"
          disabled={page === 10}
          onClick={() => setPage((current) => Math.min(10, current + 1))}
          className="
            flex h-[36px]
            items-center gap-[9px]
            rounded-full
            border border-[#DEE3E8]
            px-[14px]
            text-[13px]
            font-medium
            text-[#323B41]
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          Next
          <ArrowRight size={15} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}

type ProductCardProps = {
  product: Product;
  listView: boolean;
  added: boolean;
  onCart: () => void;
};

function ProductCard({ product, listView, added, onCart }: ProductCardProps) {
  return (
    <article
      className={`
        relative
        overflow-hidden
        rounded-[20px]
        bg-white
        ${
          listView
            ? "flex min-h-[240px] w-full items-center"
            : "h-[435px] w-full"
        }
      `}
    >
      {product.discount && (
        <span
          className="
            absolute
            right-0
            top-[24px]
            z-10
            flex h-[38px]
            items-center
            rounded-l-[4px]
            bg-[#F2945D]
            px-[16px]
            text-[14px]
            font-medium
            text-white
          "
        >
          {product.discount}
        </span>
      )}

      <div
        className={
          listView
            ? "flex h-[220px] w-[310px] shrink-0 items-center justify-center"
            : "flex h-[286px] w-full items-center justify-center"
        }
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            max-h-[205px]
            max-w-[220px]
            object-contain
          "
        />
      </div>

      <div
        className={`
          ${
            listView
              ? "flex flex-1 flex-col justify-center px-[28px] py-[24px]"
              : "px-[16px] pb-[18px]"
          }
        `}
      >
        <div className="flex items-center justify-between">
          <span
            className="
              text-[13px]
              font-normal
              text-[#8A979F]
            "
          >
            {product.category}
          </span>

          <span
            className="
              flex items-center
              gap-[4px]
              text-[13px]
              text-[#8A979F]
            "
          >
            <Star size={16} fill="#FF7A32" strokeWidth={0} />
            (4.5)
          </span>
        </div>

        <h3
          className="
            mt-[8px]
            min-h-[42px]
            max-w-[235px]
            text-[15px]
            font-medium
            leading-[1.25]
            text-[#00516B]
          "
        >
          {product.name}
        </h3>

        <div
          className="
            mt-[15px]
            flex items-center
            justify-between
            gap-[12px]
          "
        >
          <button
            type="button"
            onClick={onCart}
            className={`
              inline-flex
              h-[36px]
              shrink-0
              items-center
              justify-center
              gap-[4px]
              rounded-full
              border
              px-[15px]
              text-[13px]
              font-medium
              transition-colors

              ${
                product.highlighted || added
                  ? "border-[#09A9DF] bg-[#09A9DF] text-white"
                  : "border-[#00617B] bg-white text-[#00617B] hover:bg-[#F0FAFD]"
              }
            `}
          >
            <Plus size={14} strokeWidth={2} />
            {added ? "Added" : "Add to Cart"}
          </button>

          <div className="flex items-end gap-[6px]">
            {product.oldPrice && (
              <span
                className="
                  text-[12px]
                  text-[#8B979D]
                  line-through
                "
              >
                ${product.oldPrice.toFixed(2)}
              </span>
            )}

            <span
              className="
                whitespace-nowrap
                text-[20px]
                font-bold
                leading-none
                text-[#00516B]
              "
            >
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

type PageButtonProps = {
  number: number;
  page: number;
  setPage: (page: number) => void;
};

function PageButton({ number, page, setPage }: PageButtonProps) {
  const active = page === number;

  return (
    <button
      type="button"
      onClick={() => setPage(number)}
      className={`
        flex h-[32px] w-[32px]
        items-center justify-center
        rounded-full
        text-[13px]
        font-medium
        ${
          active
            ? "bg-[#09A9DF] text-white"
            : "text-[#536168] hover:bg-[#F2F6F8]"
        }
      `}
    >
      {number}
    </button>
  );
}
