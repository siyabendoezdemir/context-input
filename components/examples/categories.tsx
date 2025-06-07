"use client"

import { useState } from "react"

type Category = {
  id: string
  label: string
}

type CategoriesProps = {
  categories?: Category[]
  defaultCategory?: string
  onCategoryChange?: (categoryId: string) => void
  className?: string
}

const defaultCategories: Category[] = [
  { id: "featured", label: "Featured" },
  { id: "finance", label: "Finance" },
  { id: "marketing", label: "Marketing" },
  { id: "sales", label: "Sales" },
  { id: "research", label: "Research" },
  { id: "legal", label: "Legal" },
  { id: "more", label: "More" }
]

export function Categories({ 
  categories = defaultCategories, 
  defaultCategory = "featured",
  onCategoryChange,
  className = "" 
}: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId)
    onCategoryChange?.(categoryId)
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id
        const isMore = category.id === "more"
        
        return (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`flex justify-center items-center gap-0.5 rounded-lg px-3 py-0.5 transition-all duration-300 ease-out ${
              isSelected 
                ? 'bg-[var(--surface-container-low)]'
                : 'bg-transparent hover:bg-[var(--surface-container-low-opacity)]'
            }`}
            style={{
              color: isMore 
                ? 'var(--text-tertiary)' 
                : 'var(--text-secondary)',
              fontFamily: '"Suisse Int\'l"',
              fontSize: '13px',
              fontStyle: 'normal',
              fontWeight: isMore ? '450' : '500',
              lineHeight: '24px',
              letterSpacing: '-0.13px'
            }}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
} 