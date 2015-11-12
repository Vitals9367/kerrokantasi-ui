import React from 'react';
import {injectIntl, FormattedMessage} from 'react-intl';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends React.Component {
  render() {
    const {comments, areCommentsOpen, hearingId} = this.props;
    if (comments.length === 0) {
      return (<div>
        <h2><FormattedMessage id="comments"/></h2>
        {areCommentsOpen ? <CommentForm hearingId={hearingId} onPostComment={this.props.onPostComment}/> : null}
        <p><FormattedMessage id="noCommentsAvailable"/></p>
      </div>);
    }
    return (<div>
      <h2><FormattedMessage id="comments"/></h2>
      {areCommentsOpen ? <CommentForm hearingId={hearingId} onPostComment={this.props.onPostComment}/> : null}
      {comments.map((comment) => (<Comment
                                    data={comment}
                                    key={comment.id}
                                    onPostVote={this.props.onPostVote}
                                    canVote={this.props.canVote} />))}
    </div>);
  }
}

CommentList.propTypes = {
  comments: React.PropTypes.array,
  areCommentsOpen: React.PropTypes.bool,
  canVote: React.PropTypes.bool,
  hearingId: React.PropTypes.string,
  onPostComment: React.PropTypes.function,
  onPostVote: React.PropTypes.function,
};

export default injectIntl(CommentList);
