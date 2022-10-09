import React from 'react'
import { useDispatch } from 'react-redux'
import { authorChanged, categoryChanged } from '../Redux/search/action'

const Article = ({article}) => {
    const dispatch = useDispatch()

  return (
    <div
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src={article.image}
                        alt={article.title}
                    />
                </div>

                <div
                    className="flex-1 bg-white p-6 flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600" onClick={() => dispatch(categoryChanged(article.category))}>
                            <span
                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >{article.category}</span>
                        </p>
                        <a href="/" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900"
                            >{article.title}</p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <img onClick={() => dispatch(authorChanged(article.author))}
                                className="h-10 w-10 rounded-full"
                                src={article.authorImg}
                                alt={article.author}
                            />
                        </div>
                        <div className="ml-3">
                            <p
                                className="text-sm font-medium text-gray-900 hover:underline"
                            >{article.author}</p>
                            <div
                                className="flex space-x-1 text-sm text-gray-500"
                            >
                                <time dateTime={article.date}>
                                    {article.date}</time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span>{article.read}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Article