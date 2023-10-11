import React from "react";
import { SearchedPost } from "../posts/SearchedPost";
import "../posts/SearchedPost.css"

const SearchResults = () => {
    const testData = [{
        "id": 0, 
        "image": "https://spacegid.com/wp-content/uploads/2016/09/1024-1024x683.jpg", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    }, 
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://spacegid.com/wp-content/uploads/2016/09/1024-1024x683.jpg", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    }, 
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    },
    {
        "id": 0, 
        "image": "https://c.files.bbci.co.uk/14D95/production/_125879358_stsci-01g79rf5f5tpzjsdt3y640xnq1.png", 
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        "date": "2021-12-12", 
        "lesson_num": 1, 
        "title": 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC' ,
        "author": 4,
    }];

    return(
       <ul className="search-results">
            {testData.map((post) => {
                return(<SearchedPost id={post.id} image={post.image} text={post.text} date={post.date} lesson_num={post.lesson_num} title={post.title} author={post.author} />)
            })}
       </ul>
    )
}

export { SearchResults }