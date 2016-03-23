import React from 'react';
import ReactBubbleChart from './ReactBubbleChart'

const tooltipProps = [{
  css: 'symbol',
  prop: '_id'
}, {
  css: 'value',
  prop: 'value',
  display: 'Last Value'
}, {
  css: 'change',
  prop: 'colorValue',
  display: 'Change'
}]

export default class Wordmap extends React.Component {
  render () {
    let { tile, data, dictionary } = this.props
    let sentiment = data.feedback.map((hashtag, i) => ({
      _id: dictionary[hashtag[0]],
      value: hashtag[1],
      colorValue: i,
      selected: hashtag[0] === data.userFeedbackId
    }))

    return (
      <div className="wordmap-component">
        <ReactBubbleChart
          data={sentiment}
          selectedColor="white"
          selectedTextColor="rgba(0, 0, 0, 0.75)"
          fixedDomain={{ min: -1, max: 1 }}
          onClick={() => {}}
          legend={false}
          legendSpacing={0}
          tooltip={false}
          tooltipProps={tooltipProps}
          tooltipFunc={() => {}}
          fontSizeFactor={0.5}
          duration={0}
          delay={0}
        />
      </div>
    )
  }
}

export default Wordmap
