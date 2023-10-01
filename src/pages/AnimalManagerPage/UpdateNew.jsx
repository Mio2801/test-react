import React from "react"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { UpdateSpeciesAction, getRankAction, getSpeciesAction, info } from "../../stores/species/actionSpecies";
import PageLoading from "../loading";
import styled from "styled-components";
import validateForm from '../../hook/validateForm';
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { ApiGetSpecies } from "../../api/auth/auth.api";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";

const SharedStyle = styled(Link)`
    color:#000;
    text-decoration:none;
    `;

const Update = (searchInput, kingdom_id, phylum_id, class_id, order_id, family_id, genus_id) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();    
    const { pagination } = useSelector(state => state.species);
    const [show,setShow] = useState(false);
    const location = useLocation();
    
    const [dataUpdate, setDataUpdate] = useState(null);
    const [errors, setErrors] = useState({});
    const { id } = useParams();    
    const updating = id;
    // const filteredItems = list.filter(item => item.id === updating);         
    
    const {dataRank, loadingRank} = useSelector((state) => state.rank); //rank
    
    const [showKingdom, setShowKingdom] = useState(false);
    const [allKingdom, setKingdom] = useState(dataUpdate?.kingdom_id);
    const [selectedKingdom, setSelectedKingdom] = useState(null);
    const handleInputClick = () => setShowKingdom(true);    //giới
    
    
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

    const [showPhylum, setShowPhylum] = useState(false);
    const [allPhylum, setPhylum] = useState(dataUpdate?.phylum_id);
    const [selectedPhylum, setSelectedPhylum] = useState(null);
    const handleInputClick2 = () => setShowPhylum(true);    //ngành
    
    const HandleListItemClick2 = (value) => {
        setSelectedPhylum(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowPhylum(false);
		setPhylum(value.uuid)
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
        
    const [showClass, setShowClass] = useState(false);
    const [allClass, setClass] = useState(dataUpdate?.class_id);
    const [selectedClass, setSelectedClass] = useState(null);
    const handleInputClick3 = () => setShowClass(true);    //lớp
        
    const HandleListItemClick3 = (value) => {
        setSelectedClass(value.ten_khoa_hoc + ' - ' + value.ten);
        setShowClass(false);
	setClass(value.uuid)
	}
    const clearDataClass = () => {
		setSelectedClass("");
		setClass("");
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
    
    const [showOrder, setShowOrder] = useState(false);
    const [allOrder, setOrder] = useState(dataUpdate?.order_id);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const handleInputClick4 = () => setShowOrder(true);    //bộ
    
    const HandleListItemClick4 = (value) => {
        setSelectedOrder(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowOrder(false);
		setOrder(value.uuid)
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
    
    const [showFamily, setShowFamily] = useState(false);
    const [allFamily, setFamily] = useState(dataUpdate?.family_id);
    const [selectedFamily, setSelectedFamily] = useState(null);
    const handleInputClick5 = () => setShowFamily(true);    //họ
    
    const HandleListItemClick5 = (value) => {
        setSelectedFamily(value.ten_khoa_hoc + ' - ' + value.ten);
		setShowFamily(false);
		setFamily(value.uuid)
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
    
    const [showGenus, setShowGenus] = useState(false);
    const [allGenus, setGenus] = useState(dataUpdate?.genus_id);
    const [selectedGenus, setSelectedGenus] = useState(dataUpdate?.genus?.ten_khoa_hoc+' - '+dataUpdate?.genus?.ten);
    const handleInputClick6 = () => setShowGenus(true);    //chi
    
    const HandleListItemClick6 = (value) => {
        setSelectedGenus(value.ten_khoa_hoc+' - '+value.ten);
		setShowGenus(false);
		setGenus(value.uuid)
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

    useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const elementHidden = searchParams.get('elementHidden');
		if (elementHidden === 'true') {
			setShow(true); 
		} else {
			setShow(false); 
		}
	  }, [location.search]);

    useEffect(()=>{
        const callAPI = async ()=>{
            const data = await ApiGetSpecies(updating);
            console.log('data',data);
            
            setDataUpdate({
                ten: data.ten,
                ten_khoa_hoc: data.ten_khoa_hoc,
                ten_tac_gia: data.ten_tac_gia,
                ten_dia_phuong: data.ten_dia_phuong,
                nguon_du_lieu: data.nguon_du_lieu,
                kingdom_id: data.kingdom_id,
                phylum_id: data.phylum_id,
                class_id: data.class_id,
                order_id: data.order_id,
                family_id: data.family_id,
                genus_id: data.genus_id,
                kingdom: data.kingdom,
                phylumn: data.phylumn,
                class: data.class,
                order: data.order,
                family: data.family,
                genus: data.genus,
                img: data.attachments[0],
            }) 
        }
        setSelectedKingdom(dataUpdate?.kingdom?.ten_khoa_hoc+' - '+dataUpdate?.kingdom?.ten);
        setSelectedPhylum(dataUpdate?.phylumn?.ten_khoa_hoc+' - '+dataUpdate?.phylumn?.ten);
        setSelectedClass(dataUpdate?.class?.ten_khoa_hoc+' - '+dataUpdate?.class?.ten);
        setSelectedOrder(dataUpdate?.order?.ten_khoa_hoc+' - '+dataUpdate?.order?.ten);
        setSelectedFamily(dataUpdate?.family?.ten_khoa_hoc+' - '+dataUpdate?.family?.ten);
        setSelectedGenus(dataUpdate?.genus?.ten_khoa_hoc+' - '+dataUpdate?.genus?.ten);
        setKingdom(dataUpdate?.kingdom_id);
        setPhylum(dataUpdate?.phylum_id);
        setClass(dataUpdate?.class_id);
        setOrder(dataUpdate?.order_id);
        setFamily(dataUpdate?.family_id);
        setGenus(dataUpdate?.genus_id);
        if(dataUpdate === null){
            callAPI();
        }
        // dispatch(info({id: updating}));
},[dataUpdate, updating])  

    useEffect(()=>{
        dispatch(getRankAction())
    },[dispatch, allKingdom, allPhylum, allClass, allOrder, allFamily, allGenus])
    
    const handelupdate = (event) => {
		let { id, value } = event.target;
		setDataUpdate({ ...dataUpdate, [id]: value });
	};

	const handelupdateSpecies = async () => {
		const validationErrors = validateForm(dataUpdate);
		if (validationErrors &&
            selectedKingdom.length > 0 && 
            selectedPhylum.length > 0 && 
            selectedClass.length > 0 && 
            selectedOrder.length > 0 &&
            selectedFamily.length > 0 &&
            selectedGenus.length > 0) {
			alert("Cập Nhật Người dùng thành công");
            navigate("/")
			setErrors({});
			dispatch(UpdateSpeciesAction({ id: updating, data: dataUpdate, kingdom_id: allKingdom, phylum_id: allPhylum, class_id: allClass, order_id: allOrder, family_id: allFamily, genus_id: allGenus }))
				.then(() => {
					dispatch(getSpeciesAction({ page: pagination.page, itemsPerPage: pagination.perpage, search: searchInput, kingdom_id: allKingdom, phylum_id: allPhylum, class_id: allClass, order_id: allOrder, family_id: allFamily, genus_id: allGenus}));
				})
		} else {
			setErrors(validationErrors);
		}
	}

    return(
        <>
        <div style={{height:'60px',}}>
        <HeaderComponent />
        </div>
        <div className="d-flex"  >
            <div style={{left: show ? '-315px' : '0', maxWidth:'20%', transition: 'left 0.2s ease-in-out', width:'380px', zIndex:'1', position:'fixed'}}>
				<NavbarComponent />
			</div>
                <div className="form_species" style={{marginLeft: show ? '0' : '300px', width: '100%', transition: 'margin-left 0.2s ease-in-out'}}>
                    <div className="d-flex pb-3">
                        <Link to='/'><FontAwesomeIcon className="back_up" icon="fa-solid fa-arrow-left" /></Link>
                        <h5 className="d-flex align-items-center m-0 ps-4"><b>THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ</b></h5>
                    </div>
                    <div style={{width:'1000px'}}>  {/* thông tin chung về loài */}
                        <h6>I.Thông tin chung về loài</h6>
                        <div className="form_info w-100">
                            <label htmlFor="">Tên <span className="required">*</span></label><br />
                            <input className="input_form" type="text" id='ten' placeholder="Tên" value={dataUpdate?.ten} onChange={handelupdate} required />
                            {errors.name !== "" && (<span className="error">{errors.name}</span>)}
                        </div>
                        <div className="d-flex w-80">
                            <div className="form_info w-50">
                                <label htmlFor="">Tên khoa học <span className="required">*</span></label><br />
                                <input className="input_form" type="text" id='ten_khoa_hoc' placeholder="Tên khoa học" value={dataUpdate?.ten_khoa_hoc} onChange={handelupdate} required />
                                {errors.science_name !== "" && (<span className="error">{errors.science_name}</span>)}
                            </div>
                            <div className="form_info w-50">
                                <label htmlFor="">Tên tác giả</label><br />
                                <input className="input_form" type="text" id='ten_tac_gia' placeholder="Tên tác giả" value={dataUpdate?.ten_tac_gia} onChange={handelupdate} />
                            </div>
                        </div>
                        <div className="form_info w-100">
                            <label htmlFor="">Tên địa phương</label><br />
                            <input className="input_form" type="text" id='ten_dia_phuong' placeholder="Tên địa phương" value={dataUpdate?.ten_dia_phuong} onChange={handelupdate} />
                        </div>
                        <div className="form_info w-100">
                            <label htmlFor="">Nguồn dữ liệu</label><br />
                            <input className="input_form" type="text" id='nguon_du_lieu' placeholder="Nguồn dữ liệu" value={dataUpdate?.nguon_du_lieu} onChange={handelupdate} />
                        </div>
                    </div>
                    <div className="w-100 pt-3">    {/* phân loại loài */}
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
                                            return selectedKingdom;
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
                            {errors.nganh !== "" && (<span className="error">{errors.gioi}</span>)}
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
                                <div className="d-flex">
                                    <div className="img_layout mt-4">
                                        <FontAwesomeIcon icon="fa-solid fa-plus" style={{color: "#757575",}} />
                                    </div>
                                    <div className="mt-4 ms-4">
                                        <img className='img_' src={`https://wlp.howizbiz.com${dataUpdate?.img?.path}`} alt="" />
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>   
                    <button className='submit_btn' onClick={()=>handelupdateSpecies()}>Cập nhật</button>
                </div>
            
    </div>
    <div className="" style={{height:'33px'}}>
        <FooterComponent />
    </div>
    </>
    )
}

export default Update