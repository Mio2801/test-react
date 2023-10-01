import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSpeciesAction, getSpeciesAction } from '../../stores/species/actionSpecies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function DeleteSpecies({ item, searchInput }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();
	const { pagination } = useSelector((state) => state.species);
	console.log(pagination);
	
	const handleDeleteSpecies = (id) => {
		dispatch(deleteSpeciesAction({ id: id }))
			.then(() => {
				alert("Bạn đã xóa dữ liệu thành công");
				handleClose(false);
				dispatch(getSpeciesAction({ 
					page: pagination.page, 
					perpage: pagination.itemsPerPage, 
					search: "" }));
			})
			.catch((error) => {
				console.error('Xóa dữ liệu không thành công', error);
			});
	}

	return (
		<React.Fragment>
			<FontAwesomeIcon icon="fa-solid fa-trash" onClick={handleShow} style={{color: "#ff1100",}} />
			<Modal className='delete-modal' style={{top:'240px'}} show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton style={{background:'#da2a1c'}}>
					<Modal.Title className='text-light ms-2'>Bạn có chắc chắn không ?</Modal.Title>
				</Modal.Header>
				<Modal.Body className='ps-4 pb-0'>
					<p>Bạn có chắc muốn xóa <span className='text-special text-danger' style={{fontWeight:'bold'}}>{item.ten}</span> ? Điều này hoàn toàn không thế hoàn tác!</p>
				</Modal.Body>
				<Modal.Footer className='border border-0'>
					<Button className='border border-1 bg-light text-dark' onClick={handleClose}>Không</Button>
					<Button className='border border-danger bg-light text-danger' onClick={() => handleDeleteSpecies(item.id)}>Áp Dụng</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	);
}

export default DeleteSpecies;