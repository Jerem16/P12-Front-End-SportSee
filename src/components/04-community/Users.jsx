import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../utils/UserContext";

/**
 * Users component that fetches and displays data for multiple users using IDs from an external route.
 * @component
 * @returns {JSX.Element} The rendered Users component
 */
const Users = () => {
    const path = "http://localhost:8080";
    const { useMockData } = useContext(UserContext);
    const allUsersIds = "/users"; // Endpoint pour récupérer les IDs des utilisateurs
    const userDetailEndPoint = "/user/"; // Chemin de base de l'API pour récupérer les détails d'un utilisateur
    const [users, setUsers] = useState([]); // État pour stocker les données de chaque utilisateur
    const [userIds, setUserIds] = useState([]); // État pour stocker les IDs des utilisateurs

    // Fonction pour récupérer la liste des IDs des utilisateurs
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
            return data; // On suppose que data est un tableau d'IDs
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    // Fonction pour récupérer les données des utilisateurs à partir des IDs
    const fetchUserData = async (userId) => {
        const url = `${path}${userDetailEndPoint}${userId}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                return null; // Si l'utilisateur n'est pas trouvé
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return null;
        }
    };

    // Utilisation de useEffect pour récupérer les IDs et les détails des utilisateurs
    useEffect(() => {
        const getUsersData = async () => {
            const ids = await fetchUserIds(); // Récupération des IDs
            setUserIds(ids);

            const fetchedUsers = [];
            for (const id of ids) {
                // Utilisation de for...of pour itérer sur les IDs
                const userData = await fetchUserData(id); // Récupère les données utilisateur pour chaque ID
                if (userData && userData.data) {
                    fetchedUsers.push(userData);
                }
            }

            setUsers(fetchedUsers); // Mise à jour de l'état avec les données des utilisateurs
        };

        getUsersData();
    }, [path]);

    return (
        <div>
            {users.length > 0 ? (
                users.map((user) => {
                    if (!user || !user.data) {
                        return null; // Ignore les utilisateurs sans données valides
                    }

                    const { id, userInfos } = user.data;
                    return (
                        <div key={id} className="user-card">
                            <img
                                className="profile-picture"
                                src={userInfos.picture}
                                alt="Profile"
                            />
                            <h2>{`${userInfos.firstName} ${userInfos.lastName}`}</h2>
                            <p>{`Âge : ${userInfos.age}`}</p>
                            <p>{`Localisation : ${userInfos.location}`}</p>
                        </div>
                    );
                })
            ) : (
                <p>Aucun utilisateur disponible.</p> // Message par défaut si aucun utilisateur trouvé
            )}
        </div>
    );
};

export default Users;
