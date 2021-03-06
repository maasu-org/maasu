import React, { FC, Fragment, useEffect } from 'react'
import { useParams } from '@reach/router'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from 'store/types'
import { useDocumentTitle } from 'hooks/meta'
import { getIsFetchingBoard, getBoard, getBoardError } from 'store/selectors'
import { fetchBoard } from 'store/actions'
import { InvalidRoute } from 'routes/InvalidRoute'
import { EA } from 'components/EmailAnchor'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'
import { BoardMember as BoardMemberType } from 'store/Board/types'

type Props = ReduxProps & {}

export const BoardMember: FC<Props> = ({
  fetchBoard,
  isFetchingBoard,
  board,
  boardError,
}) => {
  const params = useParams()

  useEffect(() => {
    if (!board.length && !boardError.length) {
      fetchBoard()
    }
  }, [board, fetchBoard, boardError])

  const boardFiltered = board.filter(
    (boardMember) => boardMember.id === params.name
  )
  const isValidBoardMember =
    board && board.length && !isFetchingBoard && boardFiltered.length === 1

  const p = boardFiltered[0] || ({} as BoardMemberType)

  const {
    alias,
    fname,
    mname,
    lname,
    school,
    city,
    state,
    imageUrl,
    positionEmail,
    emailFallback,
    bio,
    positionDesc,
  } = p

  const name = alias || `${fname} ${mname} ${lname}` || ''

  useDocumentTitle(name || 'Board Member')

  return isFetchingBoard || (board && !board.length && !boardError) ? (
    <span>loading...</span>
  ) : isValidBoardMember ? (
    <Container className="tc">
      <TextBlock title={name}>
        {imageUrl && (
          <Fragment>
            <img className="w-80 w-40-ns br" src={imageUrl} alt={name} />
            <br />
          </Fragment>
        )}

        <span>{school}</span>
        {city && state && (
          <Fragment>
            <br />
            <span>{`${city}, ${state}`}</span>
            <br />
          </Fragment>
        )}
        <span>{positionEmail && <EA>{positionEmail}</EA>}</span>
        <span>{emailFallback && <EA>{emailFallback}</EA>}</span>
        <p>{bio}</p>
        <p className="tl">{positionDesc}</p>
      </TextBlock>
    </Container>
  ) : (
    <InvalidRoute code={404} />
  )
}

const mapStateToProps = (state: AppState) => ({
  isFetchingBoard: getIsFetchingBoard(state),
  board: getBoard(state),
  boardError: getBoardError(state),
})

const mapDispatchToProps = {
  fetchBoard,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type ReduxProps = ConnectedProps<typeof connector>

export const BoardMemberContainer = connector(BoardMember)
