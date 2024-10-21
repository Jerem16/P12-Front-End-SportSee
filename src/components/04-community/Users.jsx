import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importer Link

const Users = () => {
    const path = "http://localhost:8080";
    const allUsersIds = "/users";
    const userDetailEndPoint = "/user/";
    const [users, setUsers] = useState([]);
    // eslint-disable-next-line
    const [userIds, setUserIds] = useState([]);

    const fetchUserIds = async () => {
        const url = `${path}${allUsersIds}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(
                    "Erreur lors de la récupération des IDs des utilisateurs"
                );
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const fetchUserData = async (userId) => {
        const url = `${path}${userDetailEndPoint}${userId}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                return null;
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        const getUsersData = async () => {
            const ids = await fetchUserIds();
            setUserIds(ids);

            const fetchedUsers = [];
            for (const id of ids) {
                const userData = await fetchUserData(id);
                if (userData && userData.data) {
                    fetchedUsers.push(userData);
                }
            }

            setUsers(fetchedUsers);
        };

        getUsersData();
    }, [path]);

    return (
        <>
            {users.length > 0 ? (
                users.map((user) => {
                    if (!user || !user.data) {
                        return null;
                    }
                    const { id, userInfos } = user.data;
                    return (
                        <Link
                            key={id}
                            className="user-card data-download"
                            to={`/${id}`} // Utilisation de `to` pour la navigation
                        >
                            <img
                                className="profile-picture"
                                src={userInfos.picture}
                                alt="Profile"
                            />
                            <h2>{`${userInfos.firstName} ${userInfos.lastName}`}</h2>
                            <p>{`Âge : ${userInfos.age}`}</p>
                            <p>{`Localisation : ${userInfos.location}`}</p>
                        </Link>
                    );
                })
            ) : (
                <p>Aucun utilisateur disponible.</p>
            )}
        </>
    );
};

export default Users;
