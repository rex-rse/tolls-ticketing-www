import React from 'react'
import ReadVehicleAssociate from './ReadVehicleAssociate'
import AssociateVehicleProfile from './AssociateVehicleProfile'

interface laneTableProps {
    readOnly?: boolean
    onlyView?: boolean
    tollData?: any
    add?: boolean
    following?: boolean
    vehiclesData?: any
}

const VehiclesIndex = ({ vehiclesData, add, following }: laneTableProps) => {
    const [editVehicle, setEditVehicle] = React.useState(false)
    const [dataVehicle, setDataVehicle] = React.useState({})
    const [neww, setNeww] = React.useState(false)
    const [selectedVehicleId, setSelectedVehicleId] = React.useState('')

    const handleEditVolver = () => {
        setEditVehicle(!editVehicle)
    }
    const handleEditVehicle = (e) => {
        setEditVehicle(!editVehicle)
        const id = e.currentTarget.dataset.id
        const data = vehiclesData.find((find) => find.id === id)
        setDataVehicle(data)
    }
    console.log(selectedVehicleId)
    console.log(vehiclesData.id)
    const handleCreateNew = (boo) => {
        setNeww(boo)
    }
    const editNue = () => {}

    return (
        <>
            {!editVehicle && !neww ? (
                <ReadVehicleAssociate
                    vehiclesData={vehiclesData}
                    handleEditVehicle={handleEditVehicle}
                    editNew={editNue}
                    handleCreateNew={handleCreateNew}
                    setSelectedVehicleId={setSelectedVehicleId}
                />
            ) : (
                <AssociateVehicleProfile
                    readOnly={editVehicle}
                    handleEditVehicle={handleEditVolver}
                    handleCreateNew={handleCreateNew}
                    vehiclesData={vehiclesData}
                    selectedVehicleId={selectedVehicleId}
                    handleEditVolver={handleEditVolver}
                    dataVehicle={dataVehicle}
                />
            )}
        </>
    )
}

export default VehiclesIndex
