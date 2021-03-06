import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { GrNext, GrPrevious } from "react-icons/gr"

const Container = styled.div`
  width: 100%;
`
const WrapperButton = styled.div`
  /* border: 1px solid orange; */
  margin-top: 55px;
  text-align: center;
  .btn {
    font-size: 1.3em;
    border: 1px solid rgba(100, 100, 100, 0);
    width: 35px;
    height: 35px;
    margin: 0 15px;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      /* border: 1px solid rgba(100, 100, 100, 0.5); */
    }
    &:active {
      background: rgba(100, 100, 100, 0.1);
      border: 1px solid rgba(100, 100, 100, 0.1);
    }
  }
  .pageNum {
    margin: 0 5px;
    color: rgba(0, 0, 0, 0.8);
  }
`

export function Pagination({ pageSet, setCurrentPage, autoScroll }) {
  const [indexOfPage, setIndexOfPage] = useState(1)

  useEffect(() => {
    // [pageSet] for setting initial first page
    selectPage(indexOfPage)
  }, [pageSet, indexOfPage])

  const pageLen = pageSet.length
  let chunkArr = []
  for (let i = 1; i <= pageLen; i++) {
    chunkArr.push(i)
  }
  const selectPage = pageIndex => {
    return pageSet.map(page => {
      if (page.page === pageIndex) return setCurrentPage(page.page_title)
    })
  }
  const prevButton = () => {
    if (indexOfPage === 1) return
    setIndexOfPage(() => indexOfPage - 1)
    window.scrollTo({
      top: autoScroll.current.scrollHeight + 70,
      behavior: "smooth",
    })
  }
  const nextButton = () => {
    if (indexOfPage === pageLen) return
    setIndexOfPage(() => indexOfPage + 1)
    window.scrollTo({
      top: autoScroll.current.scrollHeight + 70,
      behavior: "smooth",
    })
  }

  return (
    <Container>
      <WrapperButton>
        <ul style={{ display: "flex", justifyContent: "center" }}>
          <li className="btn" onClick={prevButton}>
            <GrPrevious size={18} style={{ paddingBottom: "3px" }} />
          </li>
          <li>
            <p className="pageNum">
              page {indexOfPage} of {pageLen}
            </p>
          </li>
          <li className="btn" onClick={nextButton}>
            <GrNext size={18} style={{ paddingBottom: "3px" }} />
          </li>
        </ul>
      </WrapperButton>
    </Container>
  )
}
