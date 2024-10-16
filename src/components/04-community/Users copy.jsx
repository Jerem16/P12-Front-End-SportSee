import React, { useState, useEffect, useContext } from "react";
import FetchData from "../../utils/FetchData";
import { UserContext } from "../../utils/UserContext";

/**
 * Users component that fetches and displays data for multiple users by incrementing their ID.
 * @component
 * @returns {JSX.Element} The rendered Users component
 */
const Users = () => {
    const path = "http://localhost:8080";
    const { useMockData } = useContext(UserContext);
    const endPoint = "/user/"; // Chemin de base de l'API
    const [users, setUsers] = useState([]); // État pour stocker les données de chaque utilisateur
    const [currentId, setCurrentId] = useState(12); // ID de départ, ajustable

    // Fonction pour récupérer les données des utilisateurs avec ID incrémental
    const fetchUserData = async (userId) => {
        const url = `${path}${endPoint}${userId}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(
                    `Erreur lors de la récupération des données pour l'ID ${userId}`
                );
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erreur lors de la récupération des données:", error);
            return null; // Retourne null en cas d'erreur pour éviter une réponse vide
        }
    };

    // Fonction pour mapper les utilisateurs à partir de plusieurs ID
    useEffect(() => {
        const getUsersData = async () => {
            const fetchedUsers = [];
            let id = currentId;

            // Boucle sur les utilisateurs en incrémentant l'ID
            for (let i = 0; i < 10; i++) {
                const userData = await fetchUserData(id); // Récupère les données utilisateur
                if (userData && userData.data) {
                    fetchedUsers.push(userData);
                }
                id += 1; // Incrémente l'ID
            }

            setUsers(fetchedUsers); // Mise à jour de l'état avec les données des utilisateurs
        };

        getUsersData();
    }, [currentId, path]);

    return (
        <div>
            {users.map((user) => {
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
            })}
        </div>
    );
};

export default Users;
