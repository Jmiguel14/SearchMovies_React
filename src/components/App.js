import React, {useEffect, useState} from 'react';
import '../styles/App.css';
import {message} from "antd";
import MovieCards from "./MovieCards";
import MovieInfoModal from "./MovieInfoModal";
import MovieForm from "./MovieForm";
import moment from 'moment';
import MovieCommentsModal from "./MovieCommentsModal";

const App = () => {

    const [moviesCards, setMoviesCards] = useState(null);
    const [Title, setTitle] = useState('')
    const [movieId, setMovieId] = useState('')
    const [showCardInfoModal, setShowCardInfoModal] = useState(false);
    const [movieCardInfo, setMovieCardInfo] = useState(null);
    const [commentId, setCommentId] = useState('');
    const [comments, setComments] = useState([]);
    const [showCommentsModal, setShowCommentsModal] = useState(false);

    useEffect(() => {

        const getCards = async () => {
            const data = await fetch(`https://www.omdbapi.com/?apikey=30b73c19&s=${Title}`)
            const jsonCards = await data.json();

            console.log(jsonCards.Search)
            setMoviesCards(jsonCards.Search);
        };
        getCards();


    }, [Title]);

    useEffect(() => {

        const getCardInfo = async () => {
            const data = await fetch(`https://www.omdbapi.com/?apikey=30b73c19&i=${movieId}`)
            const jsonCardInfo = await data.json();

            console.log(jsonCardInfo)
            setMovieCardInfo(jsonCardInfo);
        };
        getCardInfo();


    }, [movieId]);

    const searchTitle = (title) => {
        //const title = document.querySelector('#title').value;
        if (title !== '') {
            setTitle(title);
        } else {
            message.error('Ingresa un titulo...');
        }
    }

    const showMovieInfoModal = (index) => {
        setMovieId(moviesCards[index].imdbID);
        setShowCardInfoModal(true);
    }

    const cancel = () => {
        setShowCardInfoModal(false);
        setMovieCardInfo(null);
        setMovieId('');
    }

    const ok = () => {
        setShowCardInfoModal(false);
        setMovieCardInfo(null);
        setMovieId('');
    }

    const handleAddComment = () => {
        let id2=commentId;
        let name= 'Han Solo';
        let text='';
        text = document.querySelector('#comment').value;
        let date=moment().fromNow();


        if (text != '') {
            const newComment = {
                id2,
                name,
                text,
                date
            }

            setComments((prevState) =>[
                ...prevState,
                newComment
            ])
        }else{
            message.warn('Ingrese el texto del comentario!');
        }
    }

    const handleShowComments = (index) => {
        setCommentId(moviesCards[index].imdbID);
        setShowCommentsModal(true);
    }

    const cancelCommentModal = () => {
        setShowCommentsModal(false);
    }


    return (
        <>
            <MovieForm onSearchTitle={searchTitle}/>

            <MovieCards moviesCards={moviesCards} onShowModal={showMovieInfoModal} onShowCommentModal={handleShowComments}/>

            <MovieInfoModal movieCardInfo={movieCardInfo} showCardInfoModal={showCardInfoModal} onCancel={cancel} onOk={ok}/>

            <MovieCommentsModal
                showCommentsModal={showCommentsModal}
                onCancelCommentModal={cancelCommentModal}
                comments={comments}
                commentId={commentId}
                onHandleAddComment={handleAddComment}
            />
        </>
    );
}

export default App;
