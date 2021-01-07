import React, { Component } from 'react'

export default class Read extends Component {
    render() {
        return (
            <div className="booklist">
                <h3>Already Read</h3>
                <ul>
                    {this.props.books.map((book) => (
                        <li key={book._id}>
                            <div>
                                <div className="image">
                                    <img src={book.image} alt={book.bookName} />
                                </div>
                            </div >
                            <br />
                        </li>
                    ))}
                </ul>

            </div>
        )
    }
}
