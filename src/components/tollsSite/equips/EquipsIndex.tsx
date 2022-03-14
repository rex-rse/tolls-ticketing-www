import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import Chip from 'ui-component/extended/Chip'
// import TableCustom from '../../../components/Table'

// import { makeStyles } from '@material-ui/styles';
// import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone'
// import EditIcon from '@material-ui/icons/Edit'
// import VisibilityIcon from '@material-ui/icons/Visibility'
// import SelectColumnFilter from "components/Table/Filters/SelectColumnFilter";
// import { IconButton } from '@material-ui/core'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { DefaultRootStateProps } from 'types/index'
// import { getCardsRequest } from 'store/cards/tollsActions'
// import PerfectScrollbar from 'react-perfect-scrollbar';
// import Chip from 'ui-component/extended/Chip'
import EquipsTable from './equipsTable'
import EquipsForm from './equipsForm'

// project imports
// import MainCard from 'ui-component/cards/MainCard';
import {
    // Button,
    // CardActions,
    // CardContent,
    // CardMedia,
    // Divider,
    // Typography,
    // Table,
    // TableBody,
    // TableCell,
    // TableContainer,
    // TableHead,
    // TableRow,
    // Theme
} from '@material-ui/core';

interface laneTableProps {
    tollIdParam?: string
    readOnly?: boolean
    onlyView?: boolean
    tollsData?: any
    add?:boolean
    following?:boolean
    
    
}

const LanesIndex = ({tollIdParam, tollsData, add,following}:laneTableProps) => {
    // const classes = useStyles();
    // States
    // const [rowsInitial, setRowsInitial] = React.useState<Array<any>>([])
    const [editEquip, setEditEquip] = React.useState(false)
    const [dataEquips, setDataEquips] = React.useState({})
    // Customs Hooks
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
console.log("equips",tollsData)
    
    // FUNCTIONS

    const handleEditEquip = (id:string) => {
        setEditEquip(!editEquip)
        console.log(id)
        const data = tollsData.find((find) => find._id === id)
        setDataEquips(data)
    }
    const handleReturn = () =>{
        setEditEquip(!editEquip)
    }
    
    return (
        <>
            {!editEquip && !add && (!following || tollsData.length > 0) && 
                <EquipsTable 
                    tollIdParam={tollIdParam}
                    tollsData={tollsData}
                    handleEditEquip={handleEditEquip}
                />
            }
            {editEquip &&!add && !following &&
                <EquipsForm 
                    tollIdParam={tollIdParam}
                    handleReturn={handleReturn}
                    dataEquip={dataEquips}
                    readOnly={editEquip}
                />

            }
            {!editEquip && !add && following && tollsData.length === 0  &&
                <EquipsForm 
                    tollIdParam={tollIdParam}
                    handleReturn={handleReturn}
                />

            }
           
        </>
    )
}

export default LanesIndex
