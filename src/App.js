import React, {useState} from 'react';

import styles from "./app.module.css"
import {Users, UserInfo, Posts} from "./components";

const App = () => {
    const [user, setUser] = useState(null);
    const [userIdForPosts, setUserIdForPosts] = useState(null);
    return (
        <div>
            <div className={styles.usersAndInfo}>
            <Users setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>
                {user && <UserInfo user={user} setUserIdForPosts={setUserIdForPosts} />}
            </div>
            {userIdForPosts && <Posts userId={userIdForPosts} />}
        </div>
    );
}

export default App;



// Вивести всіх юзерів, біля кожного юзера кнопка GetDetails.
//     При натисканні на кнопку праворуч повинна з’явитися повністю вся інформація про юзера і кнопка при натисканні на яку знизу повинні з’явитися його пости
// Структура схематично зображена вище...