import React, { useState, useCallback } from "react"
import pdf from "./../../assets/images/documentation.pdf"
import { Document, Page } from "react-pdf/dist/entry.webpack"
import Button from "../elements/Button"
import ButtonGroup from "../elements/ButtonGroup"
import { SizeMe } from "react-sizeme"

const Training = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  const changePage = offset => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const previousPage = useCallback(() => {
    changePage(-1)
  }, [])

  const nextPage = useCallback(() => {
    changePage(1)
  }, [])

  return (
    <div>
      <ButtonGroup>
        <Button
          color="primary"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </Button>
        <Button
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          color="primary"
        >
          Next
        </Button>
      </ButtonGroup>
      <SizeMe>
        {({ size }) => (
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} width={size.width ? size.width : 1} />
          </Document>
        )}
      </SizeMe>
    </div>
  )
}

export default Training
