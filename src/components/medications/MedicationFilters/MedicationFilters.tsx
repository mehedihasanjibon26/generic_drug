import { useMemo, useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

const MIN_PRICE = 0;
const MAX_PRICE = 750;

type AvailabilityState = {
  inStock: boolean;
  stockOut: boolean;
};

type TypeState = {
  new: boolean;
  offer: boolean;
  popular: boolean;
};

type CategoryState = {
  cardiovascular: boolean;
  supplement25: boolean;
  supplement07: boolean;
  supplement50: boolean;
  supplement15: boolean;
  supplement40: boolean;
  thyroid: boolean;
  metabolic: boolean;
};

const emptyAvailability: AvailabilityState = {
  inStock: false,
  stockOut: false,
};

const emptyTypes: TypeState = {
  new: false,
  offer: false,
  popular: false,
};

const emptyCategories: CategoryState = {
  cardiovascular: false,
  supplement25: false,
  supplement07: false,
  supplement50: false,
  supplement15: false,
  supplement40: false,
  thyroid: false,
  metabolic: false,
};

export default function MedicationFilters() {
  const [availabilityOpen, setAvailabilityOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [typeOpen, setTypeOpen] = useState(true);
  const [categoriesOpen, setCategoriesOpen] = useState(true);

  const [cardiovascularOpen, setCardiovascularOpen] = useState(true);
  const [thyroidOpen, setThyroidOpen] = useState(false);
  const [metabolicOpen, setMetabolicOpen] = useState(false);

  const [availability, setAvailability] =
    useState<AvailabilityState>(emptyAvailability);

  const [types, setTypes] = useState<TypeState>(emptyTypes);

  const [categories, setCategories] = useState<CategoryState>(emptyCategories);

  const [extraFilters, setExtraFilters] = useState<string[]>([]);

  const [minPrice, setMinPrice] = useState(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);

  const activeFilters = useMemo(() => {
    const filters: string[] = [];

    if (availability.inStock) {
      filters.push("In Stock");
    }

    if (availability.stockOut) {
      filters.push("Stock Out");
    }

    if (types.new) {
      filters.push("New");
    }

    if (types.offer) {
      filters.push("Offer");
    }

    if (types.popular) {
      filters.push("Popular");
    }

    filters.push(...extraFilters);

    return filters;
  }, [availability, extraFilters, types]);

  const removeFilter = (filter: string) => {
    if (filter === "In Stock") {
      setAvailability((current) => ({
        ...current,
        inStock: false,
      }));
      return;
    }

    if (filter === "Stock Out") {
      setAvailability((current) => ({
        ...current,
        stockOut: false,
      }));
      return;
    }

    if (filter === "New") {
      setTypes((current) => ({
        ...current,
        new: false,
      }));
      return;
    }

    if (filter === "Offer") {
      setTypes((current) => ({
        ...current,
        offer: false,
      }));
      return;
    }

    if (filter === "Popular") {
      setTypes((current) => ({
        ...current,
        popular: false,
      }));
      return;
    }

    setExtraFilters((current) => current.filter((item) => item !== filter));
  };

  const clearAll = () => {
    setAvailability(emptyAvailability);
    setTypes(emptyTypes);
    setCategories(emptyCategories);
    setExtraFilters([]);

    setMinPrice(MIN_PRICE);
    setMaxPrice(MAX_PRICE);
  };

  const updateCategory = (key: keyof CategoryState, checked: boolean) => {
    setCategories((current) => ({
      ...current,
      [key]: checked,
    }));
  };

  const handleMinPrice = (value: number) => {
    const nextValue = Math.max(MIN_PRICE, Math.min(value, maxPrice));

    setMinPrice(nextValue);
  };

  const handleMaxPrice = (value: number) => {
    const nextValue = Math.min(MAX_PRICE, Math.max(value, minPrice));

    setMaxPrice(nextValue);
  };

  const minPercent = ((minPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const maxPercent = ((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  return (
    <>
      <style>
        {`
          .medication-price-range {
            -webkit-appearance: none;
            appearance: none;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 20px;
            background: transparent;
            pointer-events: none;
          }

          .medication-price-range::-webkit-slider-runnable-track {
            height: 4px;
            background: transparent;
          }

          .medication-price-range::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            margin-top: -8px;
            border-radius: 9999px;
            border: 6px solid #08A9DF;
            background: #FFFFFF;
            cursor: pointer;
            pointer-events: auto;
          }

          .medication-price-range::-moz-range-track {
            height: 4px;
            background: transparent;
          }

          .medication-price-range::-moz-range-thumb {
            width: 10px;
            height: 10px;
            border-radius: 9999px;
            border: 5px solid #08A9DF;
            background: #FFFFFF;
            cursor: pointer;
            pointer-events: auto;
          }
        `}
      </style>

      <aside
        className="
          flex
          h-[896px]
          w-[280px]
          shrink-0
          flex-col
          items-center
          gap-[20px]
          rounded-[16px]
          bg-white
          pb-[16px]
          pl-[16px]
          pr-[20px]
          pt-[16px]
        "
      >
        {/* Header */}
        <div
          className="
            flex
            h-[28px]
            w-[244px]
            shrink-0
            items-center
            justify-between
          "
        >
          <h2
            className="
              text-[20px]
              font-semibold
              leading-[28px]
              tracking-[-0.4px]
              text-[#190832]
            "
          >
            Filters
          </h2>

          <button
            type="button"
            onClick={clearAll}
            className="
              text-[14px]
              font-normal
              leading-[20px]
              text-[#292D35]
              underline
              underline-offset-[4px]
              transition-opacity
              hover:opacity-60
            "
          >
            Clear all
          </button>
        </div>

        {/* Active filter chips */}
        <div
          className="
            flex
            h-[60px]
            w-[244px]
            shrink-0
            flex-row
            flex-wrap
            content-start
            items-start
            gap-[8px]
            overflow-hidden
          "
        >
          {activeFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => removeFilter(filter)}
              aria-label={`Remove ${filter} filter`}
              className="
                inline-flex
                h-[26px]
                items-center
                gap-[6px]
                whitespace-nowrap
                rounded-full
                bg-[#08A9DF]
                px-[9px]
                text-[12px]
                font-normal
                leading-none
                text-white
                transition-colors
                hover:bg-[#078FC0]
              "
            >
              {filter}

              <X size={13} strokeWidth={2} className="shrink-0" />
            </button>
          ))}
        </div>

        {/* Main content */}
        <div
          className="
            flex h-[736px]
            w-[244px]
            shrink-0
            flex-col
            items-start
            gap-[12px]
            overflow-hidden
          "
        >
          {/* Availability */}
          <FilterSection
            title="Product Availability"
            open={availabilityOpen}
            onToggle={() => setAvailabilityOpen((current) => !current)}
          >
            <div className="space-y-[10px]">
              <FilterCheckbox
                label="In Stock"
                count={169}
                checked={availability.inStock}
                onChange={(checked) =>
                  setAvailability((current) => ({
                    ...current,
                    inStock: checked,
                  }))
                }
              />

              <FilterCheckbox
                label="Stock Out"
                count={7}
                checked={availability.stockOut}
                onChange={(checked) =>
                  setAvailability((current) => ({
                    ...current,
                    stockOut: checked,
                  }))
                }
              />
            </div>
          </FilterSection>

          {/* Price */}
          <FilterSection
            title="Price"
            open={priceOpen}
            onToggle={() => setPriceOpen((current) => !current)}
          >
            <div>
              <div className="flex items-center gap-[8px]">
                <label
                  className="
                    flex h-[36px]
                    w-[108px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D5DFE5]
                    bg-white
                    px-[12px]
                  "
                >
                  <span className="text-[15px] font-semibold text-[#190832]">
                    $
                  </span>

                  <input
                    type="number"
                    min={MIN_PRICE}
                    max={maxPrice}
                    value={minPrice}
                    onChange={(event) =>
                      handleMinPrice(Number(event.target.value))
                    }
                    className="
                      w-full
                      bg-transparent
                      text-center
                      text-[15px]
                      font-semibold
                      text-[#190832]
                      outline-none
                      [appearance:textfield]
                      [&::-webkit-inner-spin-button]:appearance-none
                      [&::-webkit-outer-spin-button]:appearance-none
                    "
                  />
                </label>

                <span className="text-[20px] text-[#67747C]">—</span>

                <label
                  className="
                    flex h-[36px]
                    w-[108px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D5DFE5]
                    bg-white
                    px-[12px]
                  "
                >
                  <span className="text-[15px] font-semibold text-[#190832]">
                    $
                  </span>

                  <input
                    type="number"
                    min={minPrice}
                    max={MAX_PRICE}
                    value={maxPrice}
                    onChange={(event) =>
                      handleMaxPrice(Number(event.target.value))
                    }
                    className="
                      w-full
                      bg-transparent
                      text-center
                      text-[15px]
                      font-semibold
                      text-[#190832]
                      outline-none
                      [appearance:textfield]
                      [&::-webkit-inner-spin-button]:appearance-none
                      [&::-webkit-outer-spin-button]:appearance-none
                    "
                  />
                </label>
              </div>

              <div className="relative mt-[18px] h-[20px] w-full">
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-[8px]
                    h-[4px]
                    rounded-full
                    bg-[#D8E2E7]
                  "
                />

                <div
                  className="
                    absolute
                    top-[8px]
                    h-[4px]
                    rounded-full
                    bg-[#08A9DF]
                  "
                  style={{
                    left: `${minPercent}%`,
                    right: `${100 - maxPercent}%`,
                  }}
                />

                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  value={minPrice}
                  onChange={(event) =>
                    handleMinPrice(Number(event.target.value))
                  }
                  className="medication-price-range"
                  aria-label="Minimum price"
                />

                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  value={maxPrice}
                  onChange={(event) =>
                    handleMaxPrice(Number(event.target.value))
                  }
                  className="medication-price-range"
                  aria-label="Maximum price"
                />
              </div>

              <p
                className="
                  mt-[12px]
                  text-[14px]
                  leading-[20px]
                  text-[#56616A]
                "
              >
                Price:{" "}
                <span className="font-semibold text-[#190832]">
                  ${minPrice.toFixed(2)} - ${maxPrice.toFixed(2)}
                </span>
              </p>
            </div>
          </FilterSection>

          {/* Type */}
          <FilterSection
            title="Type"
            open={typeOpen}
            onToggle={() => setTypeOpen((current) => !current)}
          >
            <div className="space-y-[10px]">
              <FilterCheckbox
                label="New"
                count={169}
                checked={types.new}
                onChange={(checked) =>
                  setTypes((current) => ({
                    ...current,
                    new: checked,
                  }))
                }
              />

              <FilterCheckbox
                label="Offer"
                count={7}
                checked={types.offer}
                onChange={(checked) =>
                  setTypes((current) => ({
                    ...current,
                    offer: checked,
                  }))
                }
              />

              <FilterCheckbox
                label="Popular"
                count={25}
                checked={types.popular}
                onChange={(checked) =>
                  setTypes((current) => ({
                    ...current,
                    popular: checked,
                  }))
                }
              />
            </div>
          </FilterSection>

          {/* Categories */}
          <div className="flex min-h-0 w-full flex-1 flex-col">
            <button
              type="button"
              aria-expanded={categoriesOpen}
              onClick={() => setCategoriesOpen((current) => !current)}
              className="
                flex h-[28px]
                w-full
                shrink-0
                items-center
                justify-between
                text-left
              "
            >
              <span
                className="
                  text-[18px]
                  font-semibold
                  leading-[28px]
                  tracking-[-0.3px]
                  text-[#190832]
                "
              >
                Categories
              </span>

              {categoriesOpen ? (
                <ChevronUp
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#190832]"
                />
              ) : (
                <ChevronDown
                  size={19}
                  strokeWidth={1.8}
                  className="text-[#190832]"
                />
              )}
            </button>

            {categoriesOpen && (
              <div
                className="
                  mt-[10px]
                  min-h-0
                  w-[248px]
                  flex-1
                  overflow-y-auto
                  pr-[5px]
                "
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#C6D3DB transparent",
                }}
              >
                <CategoryParentRow
                  label="Cardiovascular"
                  checked={categories.cardiovascular}
                  expanded={cardiovascularOpen}
                  onCheckedChange={(checked) =>
                    updateCategory("cardiovascular", checked)
                  }
                  onExpand={() => setCardiovascularOpen((current) => !current)}
                />

                {cardiovascularOpen && (
                  <div className="mt-[10px] space-y-[10px] pl-[16px]">
                    <CategoryChildRow
                      label="Supplement"
                      count={25}
                      checked={categories.supplement25}
                      onChange={(checked) =>
                        updateCategory("supplement25", checked)
                      }
                    />

                    <CategoryChildRow
                      label="Supplement"
                      count={7}
                      checked={categories.supplement07}
                      onChange={(checked) =>
                        updateCategory("supplement07", checked)
                      }
                    />

                    <CategoryChildRow
                      label="Supplement"
                      count={50}
                      checked={categories.supplement50}
                      onChange={(checked) =>
                        updateCategory("supplement50", checked)
                      }
                    />

                    <CategoryChildRow
                      label="Supplement"
                      count={15}
                      checked={categories.supplement15}
                      onChange={(checked) =>
                        updateCategory("supplement15", checked)
                      }
                    />

                    <CategoryChildRow
                      label="Supplement"
                      count={40}
                      checked={categories.supplement40}
                      onChange={(checked) =>
                        updateCategory("supplement40", checked)
                      }
                    />
                  </div>
                )}

                <div className="mt-[10px]">
                  <CategoryParentRow
                    label="Thyroid"
                    checked={categories.thyroid}
                    expanded={thyroidOpen}
                    onCheckedChange={(checked) =>
                      updateCategory("thyroid", checked)
                    }
                    onExpand={() => setThyroidOpen((current) => !current)}
                  />
                </div>

                <div className="mt-[10px]">
                  <CategoryParentRow
                    label="Metabolic and Diabetes"
                    checked={categories.metabolic}
                    expanded={metabolicOpen}
                    onCheckedChange={(checked) =>
                      updateCategory("metabolic", checked)
                    }
                    onExpand={() => setMetabolicOpen((current) => !current)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

type FilterSectionProps = {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
};

function FilterSection({
  title,
  open,
  onToggle,
  children,
}: FilterSectionProps) {
  return (
    <div
      className="
        w-full
        shrink-0
        border-b
        border-[#D9E1E5]
        pb-[12px]
      "
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="
          flex h-[28px]
          w-full
          items-center
          justify-between
          text-left
        "
      >
        <span
          className="
            text-[18px]
            font-semibold
            leading-[28px]
            tracking-[-0.3px]
            text-[#190832]
          "
        >
          {title}
        </span>

        {open ? (
          <ChevronUp size={19} strokeWidth={1.8} className="text-[#190832]" />
        ) : (
          <ChevronDown size={19} strokeWidth={1.8} className="text-[#190832]" />
        )}
      </button>

      {open && <div className="mt-[10px]">{children}</div>}
    </div>
  );
}

type FilterCheckboxProps = {
  label: string;
  count: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function FilterCheckbox({
  label,
  count,
  checked,
  onChange,
}: FilterCheckboxProps) {
  return (
    <div
      className="
        flex min-h-[24px]
        w-full
        items-center
        justify-between
        gap-[12px]
      "
    >
      <label
        className="
          flex cursor-pointer
          items-center
          gap-[8px]
        "
      >
        <CustomCheckbox checked={checked} onChange={onChange} />

        <span className="text-[14px] leading-[20px] text-[#30363E]">
          {label}
        </span>
      </label>

      <span className="text-[14px] leading-[20px] text-[#30363E]">
        ({count})
      </span>
    </div>
  );
}

type CategoryParentRowProps = {
  label: string;
  checked: boolean;
  expanded: boolean;
  onCheckedChange: (checked: boolean) => void;
  onExpand: () => void;
};

function CategoryParentRow({
  label,
  checked,
  expanded,
  onCheckedChange,
  onExpand,
}: CategoryParentRowProps) {
  return (
    <div
      className="
        flex min-h-[24px]
        w-full
        items-center
        justify-between
        gap-[8px]
      "
    >
      <label
        className="
          flex min-w-0
          cursor-pointer
          items-center
          gap-[8px]
        "
      >
        <CustomCheckbox checked={checked} onChange={onCheckedChange} />

        <span
          className="
            truncate
            text-[14px]
            leading-[20px]
            text-[#30363E]
          "
        >
          {label}
        </span>
      </label>

      <button
        type="button"
        onClick={onExpand}
        aria-label={`${expanded ? "Collapse" : "Expand"} ${label}`}
        className="
          flex h-[24px] w-[24px]
          shrink-0
          items-center
          justify-center
        "
      >
        {expanded ? (
          <ChevronUp size={18} strokeWidth={1.8} />
        ) : (
          <ChevronDown size={18} strokeWidth={1.8} />
        )}
      </button>
    </div>
  );
}

type CategoryChildRowProps = {
  label: string;
  count: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function CategoryChildRow({
  label,
  count,
  checked,
  onChange,
}: CategoryChildRowProps) {
  return (
    <div
      className="
        flex min-h-[24px]
        w-full
        items-center
        justify-between
        gap-[8px]
      "
    >
      <label
        className="
          flex cursor-pointer
          items-center
          gap-[8px]
        "
      >
        <CustomCheckbox checked={checked} onChange={onChange} />

        <span className="text-[14px] leading-[20px] text-[#30363E]">
          {label}
        </span>
      </label>

      <span className="text-[14px] leading-[20px] text-[#30363E]">
        ({count.toString().padStart(2, "0")})
      </span>
    </div>
  );
}

type CustomCheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function CustomCheckbox({ checked, onChange }: CustomCheckboxProps) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={(event) => {
        event.preventDefault();
        onChange(!checked);
      }}
      className={`
        flex h-[20px]
        w-[20px]
        shrink-0
        items-center
        justify-center
        rounded-[4px]
        border
        transition-colors
        ${
          checked
            ? "border-[#08A9DF] bg-[#08A9DF]"
            : "border-[#AFC0CB] bg-white hover:border-[#08A9DF]"
        }
      `}
    >
      {checked && (
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 4.5L4.3 7.5L11 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
