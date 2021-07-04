import Database from "../assets/application.json"
import { categoriesMapper } from './categories.mappers'

export function getCategories() {
  const categories = Object.keys(Database)
  const datas = Object.values(Database)

  return categories.map((categorieName, index) => ({
    id: index,
    categorie: categorieName,
    persons: datas[index]
  }))
}