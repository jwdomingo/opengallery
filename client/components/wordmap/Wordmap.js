import React from 'react';
import ReactBubbleChart from 'react-bubble-chart'

const colorLegend = [
  //reds from dark to light
  {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Neutral'},
  // blues from light to dark
  "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
]

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
  shouldComponentUpdate (nextProps) {
    return nextProps.displayWordmap;
  }

  render () {
    let { tile, data, dictionary } = this.props
    let sentiment = data.feedback.map((hashtag, i) => ({
      _id: dictionary[hashtag[0]],
      value: hashtag[1],
      colorValue: i,
      selected: hashtag[0] === data.userFeedbackId
    }))

    return (
      <ReactBubbleChart
        className="wordmap-component"
        colorLegend={colorLegend}
        data={sentiment}
        selectedColor="#737373"
        selectedTextColor="#d9d9d9"
        fixedDomain={{ min: -1, max: 1 }}
        onClick={{}}
        legend={false}
        legendSpacing={0}
        tooltip={false}
        tooltipProps={tooltipProps}
        tooltipFunc={{}}
      />
    )
  }
}

export default Wordmap
