import React from 'react'
import { useSelector } from 'react-redux'
import Article from './Article'
import Filters from './Filters'

const Articles = () => {
    const articles = useSelector(state => state.articles)
    const filters = useSelector(state => state.filters)
  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8" >
    <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
            <h2
                className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
            >
                {filters.search ? `Search results for "${filters.search}"` : 'ALL BLOGS ARE HERE'}
            </h2>
            <p
                className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
            <Filters />
        </div>

        
        <div
            className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
            {articles
            .filter((article) => article.title.toLowerCase().includes(filters.search.toLowerCase()))
            .filter((article) => article.author.toLowerCase().includes(filters.author.toLowerCase()))
            .filter((article) => article.category.toLowerCase().includes(filters.category.toLowerCase()))
            .map((article) => (<Article key={article.id} article={article} />))}
        </div>
    </div>
</section>
  )
}

export default Articles