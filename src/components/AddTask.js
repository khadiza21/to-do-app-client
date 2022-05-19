import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data) => {
    console.log(data);
    const url = `https://cryptic-hollows-60435.herokuapp.com/home`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((addTask) => {
        console.log(addTask, user.email);
        toast("Task Added Successfully...");
      });

    reset();
  };
  return (
    <div className="container mx-auto my-5 pb-5">
      <p className="text-danger text-center">
        Make Sure Your Email Is Sent IN TIME OF Adding Task. Otherwise Cannot
        see your Tasks{" "}
      </p>
      {console.log(user)}
      <h3 className="py-3 text-primary fs-1 pb-5  text-center fw-bold">
        Add Your Task
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-75 mx-auto"
      >
        <input
          // readOnly
          value={user?.email}
          className="mb-3 py-2 ps-2"
          {...register("email")}
        />
        <input
          className="mb-3 py-2"
          placeholder="Task Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          required
          className="mb-3 py-2"
          placeholder=" Description"
          {...register("description")}
        />
        <input
          className="btn btn-success mb-3 py-2 fw-bold"
          type="submit"
          value="Add Task"
        />
      </form>
    </div>
  );
};

export default AddTask;
