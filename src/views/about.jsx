import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSendMessageActions } from '@/actions/about';
import styles from '@/assets/css/demoStyle.scss';

@connect(
  state => ({
    day: state.IndexReducers.day
  }),
  dispatch => ({
    setSendMessage: data => {
      dispatch(setSendMessageActions(data));
    }
  })
)
export default class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <span className={styles.aboutTitle}>
          配置文件有错误或一些更好的建议请联系我 <br />
          <br />
          壁纸Hotaru by Rella（pixivID 64495434）<br />
          <br />
          {this.props.day}
        </span>
      </div>
    );
  }
  componentWillMount() {
    this.props.setSendMessage({
      day: '2017/08/07'
    });
  }
}
