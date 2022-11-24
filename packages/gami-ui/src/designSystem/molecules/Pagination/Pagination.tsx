import Icon from 'designSystem/atoms/Icon'
import React, { useState } from 'react'
import * as S from './Pagination.styles'

export interface IPagination {
  numberPages: number
  initialPage?: number
}

const Pagination = ({ numberPages = 3, initialPage = 0 }: IPagination) => {
  const [pageSelected, setPageSelected] = useState(initialPage)
  const [pageIndex, setPageIndex] = useState(initialPage)

  const canPreviousPage = pageIndex > 0

  const canNextPage = pageIndex + 1 < numberPages

  const nextPage = () =>
    canNextPage && setPageIndex((prevPageIndex) => prevPageIndex + 1)

  const prevPage = () =>
    canPreviousPage && setPageIndex((prevPageIndex) => prevPageIndex - 1)

  const gotoPage = (page: number, index: number) => {
    setPageIndex(page)
    setPageSelected(index)
  }

  const getCurrentPosition = () => pageSelected * (39 + 4)

  const getPages = (
    defaultArrayOfPages: (number | string)[],
    currentPage: number
  ): (number | string)[] => {
    const initialIndex = 3
    const beforePositionsFromLast = 4

    const arrayWithCuts: (number | string)[] = defaultArrayOfPages.reduce(
      (acc, page, index) => {
        if (currentPage < initialIndex - 1) {
          if (index < initialIndex) {
            return [...acc, page]
          }
          if (index >= defaultArrayOfPages.length - 2) {
            return [...acc, page]
          }
          return acc.includes('middle') ? acc : [...acc, 'middle']
        }

        if (
          currentPage >= initialIndex - 1 &&
          currentPage <= defaultArrayOfPages.length - beforePositionsFromLast
        ) {
          if (index === 0) {
            return [...acc, page]
          }
          if (index === defaultArrayOfPages.length - 1) {
            return [...acc, page]
          }
          if (index === currentPage || index === currentPage + 1) {
            return [...acc, page]
          }
          if (index < currentPage || index < currentPage + 1) {
            return acc.includes('before') ? acc : [...acc, 'before']
          }
          return acc.includes('after') ? acc : [...acc, 'after']
        }

        if (currentPage >= defaultArrayOfPages.length - 3) {
          if (index === 0 || index === 1) {
            return [...acc, page]
          }
          if (index >= defaultArrayOfPages.length - 3) {
            return [...acc, page]
          }
          return acc.includes('middle') ? acc : [...acc, 'middle']
        }

        return acc
      },
      [] as (number | string)[]
    )

    return arrayWithCuts
  }

  const getArrayOfPage = (): (string | number)[] => {
    const defaultArrayOfPages = Array.from(Array(numberPages).keys())

    if (numberPages <= 5) {
      return defaultArrayOfPages
    }

    const pagesTransformed = getPages(defaultArrayOfPages, pageIndex)

    return pagesTransformed
  }

  const arrayPageItems = getArrayOfPage()

  return (
    <S.Pagination>
      <S.Arrow variant="primary" light shadow="none" onClick={prevPage}>
        <Icon color="#9879e9" name="arrow__left" />
      </S.Arrow>

      <S.PaginationBody>
        <S.PageSelected
          $left={getCurrentPosition()}
          shadow="secondary"
          variant="secondary"
        >
          <S.PageSpan $color="white">{pageSelected + 1}</S.PageSpan>
        </S.PageSelected>

        {arrayPageItems.map((page, index) => (
          <S.PageItem
            variant="secondary"
            flat
            onClick={() =>
              !['middle', 'before', 'after'].includes(`${page}`) &&
              gotoPage(Number(page), index)
            }
            key={index}
          >
            <S.PageSpan>
              {['middle', 'before', 'after'].includes(`${page}`)
                ? '...'
                : Number(page) + 1}
            </S.PageSpan>
          </S.PageItem>
        ))}
      </S.PaginationBody>

      <S.Arrow variant="primary" light shadow="none" onClick={nextPage}>
        <Icon color="#9879e9" name="arrow__right" />
      </S.Arrow>
    </S.Pagination>
  )
}

export default Pagination
