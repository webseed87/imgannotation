import React, { useState } from 'react';
import { WorkIcon, RightkIcon } from '../Common/Icons'

function Management() {

    const workData = [
        {
            dataNum: '1',
            dataSet: 'breat-cancer-w',
            classification: '이미지 모델링',
            CollectionDate: '2024/01/10',
            conter: '35',
        },
        {
            dataNum: '2',
            dataSet: 'breat-cancer-a',
            classification: '이미지 모델링',
            CollectionDate: '2024/01/10',
            conter: '35',
        },
        {
            dataNum: '3',
            dataSet: 'breat-cancer-b',
            classification: '이미지 모델링',
            CollectionDate: '2024/01/10',
            conter: '35',
        },
        {
            dataNum: '4',
            dataSet: 'breat-cancer-b',
            classification: '이미지 모델링',
            CollectionDate: '2024/01/10',
            conter: '35',
        },
        {
            dataNum: '5',
            dataSet: 'breat-cancer-b',
            classification: '이미지 모델링',
            CollectionDate: '2024/01/10',
            conter: '35',
        },
        {
            dataNum: '6',
            dataSet: 'breat-cancer-b',
            classification: '이미지 모델링',
            CollectionDate: '2024/01/10',
            conter: '35',
        },
    ]
    const userData = [
        {
            userNum: '1',
            userName: '홍길동',
            userwork: '100',
            employmentPeriod: '2023/01/10~2024/01/10',
        },
        {
            userNum: '2',
            userName: '홍길동',
            userwork: '100',
            employmentPeriod: '2023/01/10~2024/01/10',
        },
        {
            userNum: '3',
            userName: '홍길동',
            userwork: '100',
            employmentPeriod: '2023/01/10~2024/01/10',
        },
        {
            userNum: '4',
            userName: '홍길동',
            userwork: '100',
            employmentPeriod: '2023/01/10~2024/01/10',
        },
        {
            userNum: '5',
            userName: '홍길동',
            userwork: '100',
            employmentPeriod: '2023/01/10~2024/01/10',
        },
        {
            userNum: '6',
            userName: '홍길동',
            userwork: '100',
            employmentPeriod: '2023/01/10~2024/01/10',
        },


    ]
    const [workDataCheckedRows, setWorkDataCheckedRows] = useState({});
    const [userDataCheckedRows, setUserDataCheckedRows] = useState({});
    const handleCheckboxChange = (dataNum) => {
        setWorkDataCheckedRows((prevCheckedRows) => {
            const newCheckedRows = { ...prevCheckedRows };
            newCheckedRows[dataNum] = !newCheckedRows[dataNum];
            return newCheckedRows;
        });
    };

    const handleCheckboxChange2 = (userNum) => {
        setUserDataCheckedRows((prevCheckedRows) => {
            const newCheckedRows = { ...prevCheckedRows };
            newCheckedRows[`user_${userNum}`] = !newCheckedRows[`user_${userNum}`];
            return newCheckedRows;
        });
    };
    return (
        <div className='ManagementSection'>
            <div className='TopMenu'>
                <h3>Management Section</h3><button><WorkIcon />작업할당</button>
            </div>

            <div className="dataWarp">
                <div className='dataTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>수집데이터셋 명</th>
                                <th>작업종류</th>
                                <th>수집일자</th>
                                <th>이미지 개수</th>
                                <th>할당 체크</th>

                            </tr>
                        </thead>
                        <tbody>
                            {workData.map(work => (
                                <tr key={work.dataNum}>
                                    <td>{work.dataSet}</td>
                                    <td>{work.classification}</td>
                                    <td>{work.CollectionDate}</td>
                                    <td>{work.conter}</td>

                                    <td>      <input
                                        type="checkbox"
                                        id={work.dataNum}
                                        checked={workDataCheckedRows[work.dataNum] || false}
                                        onChange={() => handleCheckboxChange(work.dataNum)}
                                    />
                                        <label htmlFor={work.dataNum}></label></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='RightkIcon'><RightkIcon /></div>


                <div className='UserTable'>
                    <table>
                        <thead>
                            <tr>
                                <th>이름</th>
                                <th>현재 할당 중인 작업량</th>
                                <th>근무기간</th>
                                <th>할당 체크</th>

                            </tr>
                        </thead>
                        <tbody>
                            {userData.map(user => (
                                <tr key={user.userNum}>
                                    <td>{user.userName}</td>
                                    <td>{user.userwork}</td>
                                    <td>{user.employmentPeriod}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            id={`user_${user.userNum}`}
                                            checked={userDataCheckedRows[`user_${user.userNum}`] || false}
                                            onChange={() => handleCheckboxChange2(user.userNum)}
                                        />
                                        <label htmlFor={`user_${user.userNum}`}></label></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Management;