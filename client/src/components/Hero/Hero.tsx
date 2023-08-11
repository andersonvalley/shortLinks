import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { LuCopyPlus } from 'react-icons/lu'
import { useFetching } from '../../hooks/useFetching'
import { ILink } from '../../interface/link.interface'
import { LinkService } from '../../service/link.service'
import { Input } from '../UI/Input/Input'

import { copyToClipboard } from '../../utils/copy'
import { Loader } from '../UI/Loader/Loader'
import './Hero.scss'

export const Hero = () => {
  const [inputValue, setInputValue] = useState('')
  const [allLinks, setAllLinks] = useState<ILink[]>([])

  const { fetching, data, isLoading } = useFetching<ILink>()

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetching(() => LinkService.createLink(inputValue))
    setInputValue('')
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    const items = localStorage.getItem('links')

    if (items) {
      setAllLinks(JSON.parse(items))
    }
  }, [])

  useEffect(() => {
    if (data) {
      setAllLinks((prevLinks) => {
        const updatedLinks = [...prevLinks, data]
        localStorage.setItem('links', JSON.stringify(updatedLinks))
        return updatedLinks
      })
    }
  }, [data])

  return (
    <>
      <section className="section section__hero">
        <div className="inner">
          <h1 className="title">
            Сервис сокращения ссылок
          </h1>

          <p className="subtitle">
            С помощью нашего сервиса вы сможете бесплатно сделать короткую ссылку из длинной.
          </p>

          <form className='form' onSubmit={submitHandler}>
            <Input value={inputValue} onChange={inputHandler} required minLength={3} type='text' placeholder='Введите ссылку для сокращения' />
            <button className='btn' disabled={isLoading} type='submit'>{isLoading ? <Loader /> : 'Сократить ссылку'}</button>
          </form>
        </div>
      </section>

      <section className="sectionModel__frame">
        <div className="sectionModel__wrapper">
          <ul>
            {allLinks.length ?
              allLinks.map((item, index) => {
                return (
                  <li key={index} className="subtitle item">
                    <span className='original'>{item.originalLink}</span>
                    <div className='group'>
                      <span className='short'>{item.shortLink}</span>
                      <button onClick={() => copyToClipboard(item.shortLink)} className='btn btn-small' type='submit'><LuCopyPlus /></button>
                    </div>
                  </li>
                )
              }) : <li className="subtitle item center">Ссылок еще нет</li>
            }
          </ul>
        </div>
      </section>

    </>

  )
}
