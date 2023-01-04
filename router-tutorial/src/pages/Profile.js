import React from 'react';
import { useParams } from "react-router-dom";

const data = {
    starlit: {
        name: 'seoyun',
        description: '아직 배우고 싶은 게 많은 꼬꼬마 개발자'
    },
    gaeng: {
        name: 'heegyeong',
        description: '대학생 때 만난 여전히 고맙고 소중한 츤데레 친구'
    },
    aengsu: {
        name: 'suin',
        description: '옆에서 항상 응원해주는 고마운 동생'
    },
}

const Profile = () => {
    const params = useParams();
    console.log(params);
    const profile = data[params.username];
    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    );
};

export default Profile;