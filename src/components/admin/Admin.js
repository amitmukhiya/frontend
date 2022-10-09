import {React} from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import DataTable from './Table';

export default function Admin() {
  return (
    <>
    <Navbar/>
    <DataTable/>
    </>
  )
}
