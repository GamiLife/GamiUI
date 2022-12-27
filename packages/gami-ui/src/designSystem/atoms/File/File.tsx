import React from 'react'
import * as S from './File.styles'

export interface IFile {
  /**
   * Prop Of File
   */
  prop?: any
}

const File = ({ prop }: IFile) => {
  return <S.File {...prop} />
}

export default File
