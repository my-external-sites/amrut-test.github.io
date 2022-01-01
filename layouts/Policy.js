import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Cookies from 'js-cookie'
import Router from 'next/router'

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { title } = frontMatter

  function acceptCookies() {
    //TODO: Fix this
    Cookies.remove('cookie-*')
    Router.reload(window.location.pathname)
  }
  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/privacy`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    {/* <time dateTime={date}>{formatDate(date)}</time> */}
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
            </div>
          </div>
        </div>
      </article>
      <a onClick={acceptCookies}>Stop Collectiing Usage Data</a>
    </SectionContainer>
  )
}
