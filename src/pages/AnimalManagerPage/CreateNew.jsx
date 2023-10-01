import React from "react"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { getRankAction, getSpeciesAction, createSpeciesAction } from "../../stores/species/actionSpecies"
import { useState } from "react"
import PageLoading from "../loading"
//import { styled } from "styled-components"
import validateForm from '../../hook/validateForm';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent"
import { useLocation } from 'react-router-dom';


// const SharedStyle = styled.button`
// 	position: absolute;
// 	font-size: 20px;
// 	right: ${(props) => props.right}px;
// 	color: rgb(218, 42, 28);
// 	cursor: pointer;
//     `;
    
// const UploadImg = styled.input`
//     border: 2px dashed #c1c1c1;
//     width: 150px;
//     height: 150px;
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 38px;
// 	cursor: pointer;
//     `;
    
    
    const CreateNew = (searchInput, kingdom_id, phylum_id, class_id, order_id, family_id, genus_id) => {
        const dispatch = useDispatch();
        const [dataCreateSpecies, setDataCreateSpecies] = useState({});
        const [errors, setErrors] = useState({});
        const { pagination} = useSelector(state => state.species);
        const [show,setShow] = useState(false);
        const navigate = useNavigate();
        const location = useLocation();
        
        
        const {dataRank, loadingRank} = useSelector((state) => state.rank); //rank

        const [showKingdom, setShowKingdom] = useState(false);
        const [selectedKingdom, setSelectedKingdom] = useState('');
        const [allKingdom, setKingdom] = useState(1);
        const handleInputClick = () => setShowKingdom(true);    

        const [showPhylum, setShowPhylum] = useState(false);
        const [selectedPhylum, setSelectedPhylum] = useState('');
        const [allPhylum, setPhylum] = useState(1);
        // const [parentPhylum, setParentPhylum] = useState(1);
        const handleInputClick2 = () => setShowPhylum(true);    //ngành
        
        const [showClass, setShowClass] = useState(false);
        const [selectedClass, setSelectedClass] = useState('');
        const [allClass, setClass] = useState(1);
        // const [parentClass, setParentClass] = useState(1);
        const handleInputClick3 = () => setShowClass(true);    //lớp
        
        const [showOrder, setShowOrder] = useState(false);
        const [selectedOrder, setSelectedOrder] = useState('');
        const [allOrder, setOrder] = useState(1);
        // const [parentOrder, setParentOrder] = useState(1);
        const handleInputClick4 = () => setShowOrder(true);    //bộ
        
        const [showFamily, setShowFamily] = useState(false);
        const [selectedFamily, setSelectedFamily] = useState('');
        const [allFamily, setFamily] = useState(1);
        // const [parentFamily, setParentFamily] = useState(1);
        const handleInputClick5 = () => setShowFamily(true);    //họ
        
        const [showGenus, setShowGenus] = useState(false);
        const [selectedGenus, setSelectedGenus] = useState('');
        const [allGenus, setGenus] = useState(1);
        // const [parentGenus, setParentGenus] = useState(1);
        const handleInputClick6 = () => setShowGenus(true);    //chi
    
    useEffect(()=>{
        dispatch(getRankAction())
    },[dispatch, allKingdom, allPhylum, allClass, allOrder, allFamily, allGenus])

    useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const elementHidden = searchParams.get('elementHidden');
		if (elementHidden === 'true') {
			setShow(true); 
		} else {
			setShow(false); 
		}
	  }, [location.search]);

    const HandleListItemClick = (value) => {
        setSelectedKingdom(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowKingdom(false);
		setKingdom(value.uuid);
	}
    const clearDataKingdom = () => {
		setSelectedKingdom("");
		setKingdom("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
            kingdom_id: kingdom_id,
            phylum_id: phylum_id,
            class_id: class_id,
            order_id: order_id,
            family_id: family_id,
            genus_id: genus_id,
		}));
	}
    
    
    
    const HandleListItemClick2 = (value) => {
		setSelectedPhylum(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowPhylum(false);
		setPhylum(value.uuid);
        // setParentPhylum(value.parent_id)
	}
    const clearDataPhylum = () => {
		setSelectedPhylum("");
		setPhylum("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
            kingdom_id: kingdom_id,
            phylum_id: phylum_id,
            class_id: class_id,
            order_id: order_id,
            family_id: family_id,
            genus_id: genus_id,
		}));
	}
    
    
    const HandleListItemClick3 = (value) => {
		setSelectedClass(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowClass(false);
		setClass(value.uuid);
        // setParentClass(value.parent_id)
	}
    const clearDataClass = () => {
		setSelectedClass("");
		setClass("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
		}));
	}

    
    const HandleListItemClick4 = (value) => {
		setSelectedOrder(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowOrder(false);
		setOrder(value.uuid);
        // setParentOrder(value.parent_id)
	}
    const clearDataOrder = () => {
		setSelectedOrder("");
		setOrder("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
            kingdom_id: kingdom_id,
            phylum_id: phylum_id,
            class_id: class_id,
            order_id: order_id,
            family_id: family_id,
            genus_id: genus_id,
		}));
	}

    
    const HandleListItemClick5 = (value) => {
		setSelectedFamily(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowFamily(false);
		setFamily(value.uuid);
        // setParentFamily(value.parent_id)
	}
    const clearDataFamily = () => {
		setSelectedFamily("");
		setFamily("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
            kingdom_id: kingdom_id,
            phylum_id: phylum_id,
            class_id: class_id,
            order_id: order_id,
            family_id: family_id,
            genus_id: genus_id,
		}));
	}

    
    const HandleListItemClick6 = (value) => {
		setSelectedGenus(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowGenus(false);
		setGenus(value.uuid);
        // setParentGenus(value.parent_id)
	}
    
    const clearDataGenus = () => {
		setSelectedGenus("");
		setGenus("");
		dispatch(getSpeciesAction({
			page: pagination.page,
			itemsPerPage: pagination.perpage,
			search: searchInput,
            kingdom_id: kingdom_id,
            phylum_id: phylum_id,
            class_id: class_id,
            order_id: order_id,
            family_id: family_id,
            genus_id: genus_id,
		}));
	}


    //tạo mới
    const handleCreateSpecies = (event) => {
		let { id, value } = event.target;
		setDataCreateSpecies((pre) => ({ ...pre, [id]: value, }));
    }

    const handelCreateNewSpecies = async () => {
		const validationErrors = validateForm(dataCreateSpecies);
		if (validationErrors && 
            selectedKingdom.length > 0 && 
            selectedPhylum.length > 0 && 
            selectedClass.length > 0 && 
            selectedOrder.length > 0 && 
            selectedFamily.length > 0 &&
            selectedGenus.length > 0) {
			setErrors({});
			dispatch(createSpeciesAction({ data: dataCreateSpecies, kingdom_id: allKingdom, phylum_id: allPhylum, class_id: allClass, order_id: allOrder, family_id: allFamily, genus_id: allGenus}))
				alert("thêm dữ liệu thành công");
                navigate("/")
		} 
        else {
			alert("thêm dữ liệu thất bại");
			setErrors(validationErrors);
		}
	} 
       

    return(
        <>
        <div style={{height:'60px',}}>
            <HeaderComponent />
        </div>
        <div className="d-flex h-100" >
            <div style={{left: show ? '-315px' : '0', maxWidth:'20%', transition: 'left 0.2s ease-in-out', width:'380px', zIndex:'1', position:'fixed'}}>
				<NavbarComponent />
			</div>
            <div className="form_species" style={{marginLeft: show ? '0' : '300px', width: '100%', transition: 'margin-left 0.2s ease-in-out'}}>
                <div className="d-flex pb-3">
                    <Link to='/'><FontAwesomeIcon className="back_up" icon="fa-solid fa-arrow-left" /></Link>
                    <h5 className="d-flex align-items-center m-0 ps-4"><b>THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ</b></h5>
                </div>
                <div style={{width:'1000px'}}>
                    <h6>I.Thông tin chung về loài</h6>
                    <div className="form_info w-100">
                        <label htmlFor="">Tên <span className="required">*</span></label><br />
                        <input className="input_form" type="text" id='ten' placeholder="Tên" onChange={handleCreateSpecies} />
                        {errors.name !== "" && (<span className="error">{errors.name}</span>)}
                    </div>
                    <div className="d-flex w-80">
                        <div className="form_info w-50">
                            <label htmlFor="">Tên khoa học <span className="required">*</span></label><br />
                            <input className="input_form" type="text" id='ten_khoa_hoc' placeholder="Tên khoa học" onChange={handleCreateSpecies} />
                            {errors.science_name !== "" && (<span className="error">{errors.science_name}</span>)}
                        </div>
                        <div className="form_info w-50">
                            <label htmlFor="">Tên tác giả</label><br />
                            <input className="input_form" type="text" id='ten_tac_gia' placeholder="Tên tác giả" onChange={handleCreateSpecies} />
                        </div>
                    </div>
                    <div className="form_info w-100">
                        <label htmlFor="">Tên địa phương</label><br />
                        <input className="input_form" type="text" id='ten_dia_phuong' placeholder="Tên địa phương" onChange={handleCreateSpecies} />
                    </div>
                    <div className="form_info w-100">
                        <label htmlFor="">Nguồn dữ liệu</label><br />
                        <input className="input_form" type="text" id='nguon_du_lieu' placeholder="Nguồn dữ liệu" onChange={handleCreateSpecies} />
                    </div>
                </div>
                <div className="w-100 pt-3">

                    <div className="d-flex">
                        <h6>II.Phân loại học</h6>
                        <FontAwesomeIcon icon="fa-solid fa-plus" style={{
                            color: "#ffffff", 
                            background:'#f44336', 
                            marginLeft:'12px', 
                            width:'20px', 
                            height:'20px',
                            borderRadius:'50%',
                            padding:'8px',
                            fontSize:'18px'
                        }} />
                    </div>
                    <div className="d-flex">
                        <div className="form_info w-50">
                        <label htmlFor="">Giới <span className="required">*</span></label><br />
                            <input 
                                id="kingdom"
                                className="input_form" 
                                type="text" 
                                placeholder="Giới" 
                                onClick={handleInputClick}
                                value={selectedKingdom}
                                onChange={(e) => setSelectedKingdom(e.target.value)} required
                            />
                            <FontAwesomeIcon 
                                icon="fa-solid fa-xmark" 
                                className="clearDataSelected" 
                                style={{color: "#e51515", left:show ? '31.5%': '45%', transition: 'left 0.2s ease-in-out'}} 
                                onClick={clearDataKingdom} 
                            />
                            <div style={{height:'30px'}}>
                            {errors.gioi !== "" && (<span className="error">{errors.gioi}</span>)}
                            </div>
                            <div className="list_type" id='Rank_id' style={{ maxWidth: "425px", display: showKingdom ? 'block' : 'none' }}>
                                {loadingRank && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataRank && dataRank.map((item) => {
                                            if (item.rank==='Kingdom') {
                                                return (
                                                    <React.Fragment key={item.uuid}>
                                                        <li className='dataType' onClick={() => HandleListItemClick(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
                                                    </React.Fragment>
                                                )
                                            }
                                        })}
								</ul>
                            </div>
                        </div>

                        <div className="form_info w-50">
                        <label htmlFor="">Ngành <span className="required">*</span></label><br />
                            <input 
                                id="phylum"
                                className="input_form" 
                                type="text" 
                                placeholder="Ngành" 
                                onClick={handleInputClick2}
                                value={selectedPhylum}
                                onChange={(e) => setSelectedPhylum(e.target.value)} required
                            />
                            <FontAwesomeIcon 
                                icon="fa-solid fa-xmark" 
                                className="clearDataSelected" 
                                style={{color: "#e51515", left:show ? '63.5%': '70%', transition: 'left 0.2s ease-in-out'}} 
                                onClick={clearDataPhylum} 
                            />
                            {errors.nganh !== "" && (<span className="error">{errors.nganh}</span>)}
                            <div className="list_type" id='Rank_id' style={{ maxWidth: "425px", display: showPhylum ? 'block' : 'none' }}>
                                {loadingRank && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataRank && dataRank.map((item) => {
                                            if (item.rank==='Phylum' && item.parent_id===allKingdom) {
                                                return (
                                                    <React.Fragment key={item.uuid}>
                                                        <li className='dataType' onClick={() => HandleListItemClick2(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
                                                    </React.Fragment>
                                                )
                                            }
                                            return selectedPhylum;
                                        })}
								</ul>
                            </div>
                        </div>

                        <div className="form_info w-50">
                            <label htmlFor="">Lớp <span className="required">*</span></label><br />
                            <input 
                                id="class"
                                className="input_form" 
                                type="text" 
                                placeholder="Lớp" 
                                onClick={handleInputClick3}
                                value={selectedClass}
                                onChange={(e) => setSelectedClass(e.target.value)} required
                            />
                            <FontAwesomeIcon 
                                icon="fa-solid fa-xmark" 
                                className="clearDataSelected" 
                                style={{color: "#e51515", left:show ? '95.2%': '95.2%', transition: 'left 0.2s ease-in-out'}} 
                                onClick={clearDataClass} 
                            />
                            {errors.lop !== "" && (<span className="error">{errors.lop}</span>)}
                            <div className="list_type" id='class_id' style={{ maxWidth: "425px", display: showClass ? 'block' : 'none' }}>
                                {loadingRank && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataRank && dataRank.map((item) => {
											if (item.rank==='Class' && item.parent_id===allPhylum) {
                                                return (
                                                    <React.Fragment key={item.uuid}>
                                                        <li className='dataType' onClick={() => HandleListItemClick3(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
                                                    </React.Fragment>
                                                )
                                            }
                                            return selectedClass
                                        })}
								</ul>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">

                        <div className="form_info w-50">
                        <label htmlFor="">Bộ <span className="required">*</span></label><br />
                            <input 
                                id="order"
                                className="input_form" 
                                type="text" 
                                placeholder="Bộ" 
                                onClick={handleInputClick4}
                                value={selectedOrder}
                                onChange={(e) => setSelectedOrder(e.target.value)} required
                            />
                            <FontAwesomeIcon 
                                icon="fa-solid fa-xmark" 
                                className="clearDataSelected2" 
                                style={{color: "#e51515", left:show ? '31.5%': '45%', transition: 'left 0.2s ease-in-out'}} 
                                onClick={clearDataOrder} 
                            />
                            {errors.bo !== "" && (<span className="error">{errors.bo}</span>)}
                            <div className="list_type" id='order_id' style={{ maxWidth: "425px", display: showOrder ? 'block' : 'none' }}>
                                {loadingRank && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataRank && dataRank.map((item) => {
											if (item.rank==='Order' && item.parent_id===allClass) {
                                                return (
                                                    <React.Fragment key={item.uuid}>
                                                        <li className='dataType' onClick={() => HandleListItemClick4(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
                                                    </React.Fragment>
                                                )
                                            }
                                        })}
								</ul>
                            </div>
                        </div>

                        <div className="form_info w-50">
                            <label htmlFor="">Họ <span className="required">*</span></label><br />
                            <input 
                                id="family"
                                className="input_form" 
                                type="text" 
                                placeholder="Họ" 
                                onClick={handleInputClick5}
                                value={selectedFamily}
                                onChange={(e) => setSelectedFamily(e.target.value)} required
                            />
                            <FontAwesomeIcon 
                                icon="fa-solid fa-xmark" 
                                className="clearDataSelected2" 
                                style={{color: "#e51515", left:show ? '63.5%': '70%', transition: 'left 0.2s ease-in-out'}} 
                                onClick={clearDataFamily} 
                            />
                            {errors.ho !== "" && (<span className="error">{errors.ho}</span>)}
                            <div className="list_type" id='family_id' style={{ maxWidth: "425px", display: showFamily ? 'block' : 'none' }}>
                            {loadingRank && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataRank && dataRank.map((item) => {
											if (item.rank==='Family' && item.parent_id===allOrder) {
                                                return (
                                                    <React.Fragment key={item.uuid}>
                                                        <li className='dataType' onClick={() => HandleListItemClick5(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
                                                    </React.Fragment>
                                                )
                                            }
                                        })}
								</ul>
                            </div>
                        </div>

                        <div className="form_info w-50">
                            <label htmlFor="">Chi <span className="required">*</span></label><br />
                            <input 
                                id="genus"
                                className="input_form" 
                                type="text" 
                                placeholder="Chi" 
                                onClick={handleInputClick6}
                                value={selectedGenus}
                                onChange={(e) => setSelectedGenus(e.target.value)} required
                            />
                            <FontAwesomeIcon 
                                icon="fa-solid fa-xmark" 
                                className="clearDataSelected2" 
                                style={{color: "#e51515", left:show ? '95.2%': '95.2%', transition: 'left 0.2s ease-in-out'}} 
                                onClick={clearDataGenus} 
                            />
                            {errors.chi !== "" && (<span className="error">{errors.chi}</span>)}
                            <div className="list_type" id='genus_id' style={{ maxWidth: "425px", height:'200px', display: showGenus ? 'block' : 'none' }}>
                            {loadingRank && <PageLoading />}
                                <ul id="List_of_species_type" className='mb-0'>
										{dataRank && dataRank.map((item) => {
											if (item.rank==='Genus' && item.parent_id===allFamily) {
                                                return (
                                                    <React.Fragment key={item.uuid}>
                                                        <li className='dataType' onClick={() => HandleListItemClick6(item)}>{item.ten_khoa_hoc}-{item.ten}</li>
                                                    </React.Fragment>
                                                )
                                            }
                                        })}
								</ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-4">
                        <h6>III.Đặc điểm nhận dạng</h6>
                        <div>
                            <h6>Hình ảnh minh họa</h6>
                                {/* <input type="file" /> */}
                            <div className="img_layout mt-4">
                                <FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#757575",}} />
                            </div>
                        </div>
                    </div>
                </div>
                <button className='submit_btn' onClick={handelCreateNewSpecies}>Thêm mới</button>
            </div>
        </div>
        <div style={{height:'33px',}}>
            <FooterComponent />
        </div>
        </>
    )
}

export default CreateNew