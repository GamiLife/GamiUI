import React from 'react'
import Title from '../Title'
import * as S from './File.styles'
import { useDrag } from './useDrag'
import { useFile } from './useFile'

export interface IFile {
  /**
   * Prop Of File
   */
  prop?: any
}

const File = ({ prop }: IFile) => {
  const {
    files,
    formatFileSize,
    removeFile,
    inputRef,
    handleListFilesSelected,
    handleBrowseFiles,
    addFile,
    transformFileData,
  } = useFile()
  const { handleDrag, handleDrop, dragActive } = useDrag({
    transformFileData,
    addFile,
  })

  return (
    <S.FileWrapper>
      {!!files.length && (
        <S.FileList>
          {files.map(({ name, extension, size, id }) => (
            <S.FileItem key={id}>
              <S.FileDetails>
                <S.FileType padding="11px">{extension}</S.FileType>
                <Title
                  level="h4"
                  fontWeight="semibold"
                >{`${name}.${extension}`}</Title>
              </S.FileDetails>
              <S.FileSize>
                <Title level="h4" fontWeight="normal">
                  {formatFileSize(size)}
                </Title>
                <S.RemoveFileItem
                  padding="7px"
                  variant="primary"
                  rounded="full"
                  onClick={() => removeFile(id)}
                >
                  <S.Remove name="close" />
                </S.RemoveFileItem>
              </S.FileSize>
            </S.FileItem>
          ))}
        </S.FileList>
      )}

      <S.File>
        <S.InputFile
          onChange={handleListFilesSelected}
          ref={inputRef}
          type="file"
        />

        <S.FilePlus
          padding="7px"
          variant="primary"
          rounded="full"
          onClick={handleBrowseFiles}
        >
          <S.Plus size="25px" name="plus" color="white" />
        </S.FilePlus>

        <S.DragZone onDragEnter={handleDrag}>
          <S.DragText fontWeight="semibold" level="h4" textAlign="center">
            Drag files here
          </S.DragText>

          {dragActive && (
            <S.DragPlaceholder
              id="drag-file-element"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            />
          )}
        </S.DragZone>
      </S.File>
    </S.FileWrapper>
  )
}

export default File
