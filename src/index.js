import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle author={tweet.author} /> <Time time={tweet.timestamp} />
                <Message text={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

function Avatar() {
    /* Image Source: https://openclipart.org/image/2400px/svg_to_png/277081/Male-Avatar.png */
    return (
        <img
            src= "https://openclipart.org/image/2400px/svg_to_png/277081/Male-Avatar.png"
            className="avatar"
            alt="avatar"
        />
    );
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

function NameWithHandle({ author }) {
    const { name, handle } = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">
            {timeString}
        </span>
    );
};

const ReplyButton = () => (
    <i className="fa fa-reply reply-button" />
);

function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet" />
        {getRetweetCount(count)}
    </span>
);

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart" />
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>}
        </span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
);

let testTweet = {
    message: "What's up Twitter!",
    author: {
        handle: "tweeterson99",
        name: "Tweet Tweeterson"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render(
    <Tweet tweet={testTweet} />,
    document.querySelector('#root')
);
