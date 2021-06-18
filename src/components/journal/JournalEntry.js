import React from 'react';
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url }) => {
    
    const noteDate = moment(date);

    const dispatch = useDispatch();

    const handleEntryClick = (e) => {
        e.preventDefault();

        dispatch( activeNote( id, {
            date, title, body, url
        }));
    }

    return (
        <div 
            className="journal__entry pointer animate__animated animate__fadeIn"
            onClick={ handleEntryClick }
        >
            {
                url && 
                <div 
                    className="journal__entry-picture pointer"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${ url })`,
                    }}
                >
                </div>
            }
            <div className="journal__entry-body pointer">
                <p className="journal__entry-title pointer">
                    { title }
                </p>
                <p className="journal__entry-content pointer">
                    { body } 
                </p>
            </div>

            <div className="journal__entry-date-box pointer">
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
