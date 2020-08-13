import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowContact = ({ addFormData }) => {
    const [items, setItems] = useState([]);
    const [itemsForm, setItemsForm] = useState({});

    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/contact/show/")
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(setList, []);

    const deleteContact = (id) => {
        axios
            .delete("http://127.0.0.1:8000/api/contact/delete/" + id)
            .then(function (response) {
                setList();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getValue = (event) => {
        const { name, value } = event.target
        setItemsForm({
            ...itemsForm, [name]: value
        })
        // console.log(target.value)
    }

    const onSubmitData = (event) => {
        event.preventDefault();
        addFormData(itemsForm)

    }

    return (
        <div className="table-responsive">
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Họ và Tên </th>
                        <th scope="col">Email</th>
                        <th scope="col">Chủ đề</th>
                        <th scope="col">Nội dung</th>
                        <th scope="col">Thời gian</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody id="list_data">
                    {items.map((contact, index) => (
                        <tr key={index}>
                            <th scope="row">{++index}</th>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.title}</td>
                            <td><details><summary>Nội dung chi tiết</summary>{contact.content}</details></td>
                            <td>{contact.created_at}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => {
                                        if (
                                            window.confirm("Bạn có chắc chắn muốn xóa danh mục này?")
                                        ) {
                                            deleteContact(contact.id);
                                        }
                                    }}
                                    className="btn btn-danger">
                                    Xóa
                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowContact;
