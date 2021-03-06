import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { fetchNewsletters } from 'store/actions'
import {
  getIsFetchingNewsletters,
  getNewsletters,
  getNewslettersError,
} from 'store/selectors'
import { A } from 'components/Link'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import { MONTHS } from 'constants/strings'

type Props = RouteComponentProps & ReduxProps & {}

export const Newsletters: FC<Props> = ({
  fetchNewsletters,
  isFetchingNewsletters,
  newsletters,
  newslettersError,
}) => {
  useDocumentTitle('Newsletter')

  useEffect(() => {
    if (newsletters && !newsletters.length && !newslettersError) {
      fetchNewsletters()
    }
  }, [fetchNewsletters, newsletters, newslettersError])

  return (
    <Container className="tc">
      <TextBlock title="Newsletter">
        <p>
          The MAASU newsletter is a quick way to stay up to date on MAASU news
          and current issues within the community.
        </p>
        <div>
          {isFetchingNewsletters ? (
            <span>loading...</span>
          ) : (
            <table className="mxa">
              <thead>
                <tr>
                  <th>volume</th>
                  <th>issue</th>
                  <th>newsletter</th>
                </tr>
              </thead>
              <tbody>
                {newsletters.map((n, i) => {
                  const d = new Date(n.date)

                  return (
                    <tr key={i}>
                      <td>{n.vol}</td>
                      <td>{n.issue}</td>
                      <td className="tr">
                        <A href={n.url}>
                          {n.title && <span>{n.title} -</span>}
                          <span>
                            {MONTHS[d.getMonth()]} {d.getFullYear()}
                          </span>
                        </A>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </TextBlock>
    </Container>
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingNewsletters: getIsFetchingNewsletters(state),
  newsletters: getNewsletters(state),
  newslettersError: getNewslettersError(state),
})

const mapDispatchToProps = {
  fetchNewsletters,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const NewslettersContainer = connector(Newsletters)
