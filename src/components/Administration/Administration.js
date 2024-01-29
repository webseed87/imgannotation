import React, { useState, useEffect } from 'react';
import { Delete, Modfiy, Search, Pencel, PlusIcon } from '../Common/Icons';

const serchOptions = [
    { value: "계정ID", name: "id" },
    { value: "사용자명", name: "user" },
    { value: "계정권한", name: "authority" },
];
const userData = [
    {
        accountId: 'admin',
        email: 'abc@ac.co.kr',
        userName: '홍길동',
        issueDate: '2024/01/10',
        expiryDate: '2024/12/10',
        lastAccessDate: '2024/12/10',
    },
    {
        accountId: 'admin1',
        email: 'abc@ac.co.kr',
        userName: '홍길동',
        issueDate: '2024/01/10',
        expiryDate: '2024/12/10',
        lastAccessDate: '2024/12/10',
    },
    {
        accountId: 'admin2',
        email: 'abc@ac.co.kr',
        userName: '홍길동',
        issueDate: '2024/01/10',
        expiryDate: '2024/12/10',
        lastAccessDate: '2024/12/10',
    },
    {
        accountId: 'admin3',
        email: 'abc@ac.co.kr',
        userName: '홍길동',
        issueDate: '2024/01/10',
        expiryDate: '2024/12/10',
        lastAccessDate: '2024/12/10',
    },
    {
        accountId: 'admin4',
        email: 'abc@ac.co.kr',
        userName: '홍길동',
        issueDate: '2024/01/10',
        expiryDate: '2024/12/10',
        lastAccessDate: '2024/12/10',
    },
    {
        accountId: 'admin5',
        email: 'abc@ac.co.kr',
        userName: '홍길동',
        issueDate: '2024/01/10',
        expiryDate: '2024/12/10',
        lastAccessDate: '2024/12/10',
    },
    {
        accountId: 'admin6',
        email: 'abc@ac.co.kr',
        userName: '홍길동',
        issueDate: '2024/01/10',
        expiryDate: '2024/12/10',
        lastAccessDate: '2024/12/10',
    },
    {
        accountId: 'admin7',
        email: 'abc@ac.co.kr',
        userName: '홍길동',
        issueDate: '2024/01/10',
        expiryDate: '2024/12/10',
        lastAccessDate: '2024/12/10',
    },

];
const SelectBox = (props) => {
    return (
        <select>
            {props.options.map((option) => (
                <option  key={option.value}
                    value={option.value}
                    defaultValue={props.defaultValue === option.value}
                >
                    {option.name}
                </option>
            ))}
        </select>
    );
};
function Administration() {
    return (
        <div className="Administration">
            <h3>Administration</h3>
            <div className="Topspace">
                <div className="Serchbar">
                    <SelectBox options={serchOptions} defaultValue="계정ID"></SelectBox>
                    <input type='search' placeholder='Search...'></input><button className='topSerach'><Search  /></button>
                </div>
                <div><button><PlusIcon color="#ffffff" /> Add account</button></div>
            </div>
            <div className="AdminTable">
                <table>

                    <thead>
                        <tr>
                            <th>계정 ID</th>
                            <th>이메일</th>
                            <th>사용자 명</th>
                            <th>발급 일자</th>
                            <th>만료 일자</th>
                            <th>마지막 접근 일자</th>
                            <th>변경</th>
                            <th>계정권한</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map(user => (
                            <tr key={user.accountId}>
                                <td>{user.accountId}</td>
                                <td>{user.email}</td>
                                <td>{user.userName}</td>
                                <td>{user.issueDate}</td>
                                <td>{user.expiryDate}</td>
                                <td>{user.lastAccessDate}</td>
                                <td><Modfiy /><Delete /></td>
                                <td>
                                    <div className='Authority'>
                                        <div className='Admin'>
                                            <input type="checkbox" id={`admin_${user.accountId}`} />
                                            <label htmlFor={`admin_${user.accountId}`}><span>Admin</span></label>
                                        </div>
                                        <div className='Labeler'>
                                            <input type="checkbox" id={`labeler_${user.accountId}`} />
                                            <label htmlFor={`labeler_${user.accountId}`}><span>Labeler</span></label>
                                        </div>
                                        <div className='Manager'>
                                            <input type="checkbox" id={`manager_${user.accountId}`} />
                                            <label htmlFor={`manager_${user.accountId}`}><span>Manager</span></label>
                                        </div>
                                        <div className='Customer'>
                                            <input type="checkbox" id={`customer_${user.accountId}`} />
                                            <label htmlFor={`customer_${user.accountId}`}><span>Customer</span></label>
                                        </div> <Pencel />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )


}

export default Administration