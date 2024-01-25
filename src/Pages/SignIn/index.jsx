import React from "react";
import Layout from "../../Components/Layout";

function SingIn() {
  return (
    <Layout>
      <h2 className="text-np_black font-medium text-xl">Sing in</h2>
      <form
        className="bg-np_white bg-opacity-80 flex flex-col p-8 rounded-lg mt-20"
        onSubmit={(target) => {
          target.preventDefault();
        }}
        action="">
        <span className="text-np_black font-medium">Email</span>
        <input
          className="bg-np_white rounded-lg border border-np_black w-80 h-8 p-4 mb-4 focus:outline-none"
          type="email"
          name="email"
        />
        <span>password</span>
        <input
          className="bg-np_white rounded-lg border border-np_black w-80 h-8 p-4 mb-4 focus:outline-none"
          type="password"
          name="password"
          id=""
        />
        {/* <div>
          <input className="my-2 mr-2" type="checkbox" name="remerber" id="" />
          <span>remerber me</span>
        </div> */}
        <button
          className="bg-np_yellow text-np_white font-bold text-lg h-10 rounded-md mt-10"
          type="submit">
          sing in
        </button>
      </form>
    </Layout>
  );
}

export default SingIn;
