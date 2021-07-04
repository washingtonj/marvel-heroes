import Database from "../assets/application.json"

export function getCategories() {
  const categories = Object.keys(Database)
  const datas = Object.values(Database)

  return categories.map((categorieName, index) => ({
    id: Math.random(),
    categorie: categorieName,
    persons: datas[index]
  }))
}