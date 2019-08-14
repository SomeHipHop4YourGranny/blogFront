import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import enLocale from 'date-fns/locale/en'

const Time = ({ time }) => (
  <Fragment>
    {distanceInWordsToNow(time, { addSuffix: true, locale: enLocale })}
  </Fragment>
)

Time.propTypes = {
  time: PropTypes.string
}

export default Time
