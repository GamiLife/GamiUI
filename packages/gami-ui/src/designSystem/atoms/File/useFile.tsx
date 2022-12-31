import { useState, useRef } from 'react'

export interface IFileView {
  id: string
  name: string
  extension: string
  size: number
  file: File
}

export interface IUseFile {
  files: IFileView[]
  setFiles: (value: IFileView[]) => void
}

export const useFile = ({ files, setFiles }: IUseFile) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const formatFileSize = (fileSize: number) => {
    const fileSizeStr = `${fileSize}`

    if (fileSizeStr.length < 7) {
      return `${Math.round(+fileSize / 1024).toFixed(0)}kb`
    }

    return `${(Math.round(+fileSize / 1024) / 1000).toFixed(0)}MB`
  }

  const addFile = (newFile: IFileView) => {
    const isOnFileList = files.find(({ id }) => newFile.id === id)

    if (isOnFileList) return

    const filesUpdated = [...files, newFile]
    setFiles(filesUpdated)
  }

  const removeFile = (idToRemove: string) => {
    if (!idToRemove) return

    const filesUpdated = files.filter(({ id }) => idToRemove !== id)
    setFiles(filesUpdated)

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  const handleListFilesSelected = () => {
    const filesInput = inputRef.current?.files

    if (filesInput === undefined) return
    if (filesInput === null) return

    const file = filesInput.item(0)

    if (!file) return

    const newFile = transformFileData(file)
    addFile(newFile)
  }

  const transformFileData = (file: File) => {
    const [name, extension] = file.name.split('.')
    const size = file.size
    const newFile = {
      id: file.name,
      name,
      extension: extension.toLowerCase(),
      size,
      file,
    }

    return newFile
  }

  const handleBrowseFiles = () => {
    inputRef.current?.click()
  }

  return {
    files,
    formatFileSize,
    removeFile,
    inputRef,
    handleListFilesSelected,
    handleBrowseFiles,
    addFile,
    transformFileData,
  }
}
