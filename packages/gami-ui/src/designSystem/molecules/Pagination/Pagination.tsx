import Icon from 'designSystem/atoms/Icon'
import React, { useState } from 'react'
import * as S from './Pagination.styles'

export interface IPagination {
  numberPages: number
  initialPage?: number
}

const Pagination = ({ numberPages = 3, initialPage = 0 }: IPagination) => {
  const [pageIndex, setPageIndex] = useState(initialPage)

  const canPreviousPage = pageIndex > 0

  const canNextPage = pageIndex + 1 < numberPages

  const nextPage = () =>
    canNextPage && setPageIndex((prevPageIndex) => prevPageIndex + 1)

  const prevPage = () =>
    canPreviousPage && setPageIndex((prevPageIndex) => prevPageIndex - 1)

  const gotoPage = (page: number) => setPageIndex(page)

  const getCurrentPosition = () => pageIndex * 39 + pageIndex * 8

  const getPositionPage = (): 'start' | 'middle' | 'end' => {
    const half = numberPages / 2

    return 'start'
  }

  const getArrayOfPage = () => {
    const defaultArrayOfPages = Array.from(Array(numberPages).keys())

    if (numberPages <= 5) {
      return defaultArrayOfPages
    }

    const arrayWithCuts: number[] = defaultArrayOfPages.reduce((acc, page) => {
      return [...acc, page]
    }, [] as number[])

    return arrayWithCuts
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
          <S.PageSpan $color="white">{pageIndex + 1}</S.PageSpan>
        </S.PageSelected>

        {arrayPageItems.map((_, index) => (
          <S.PageItem
            variant="secondary"
            flat
            onClick={() => gotoPage(index)}
            key={index}
          >
            <S.PageSpan>{index + 1}</S.PageSpan>
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
