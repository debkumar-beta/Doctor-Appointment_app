import React from "react";
import Layout from "./../components/Layout";
import { Tabs, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function NotificationPage() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading);
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.errror(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };

  const handleDeleteAllRead = () => {};
  return (
    <>
      <Layout>
        <h4 className="p-3 text-center">Notification Page</h4>
        <Tabs>
          <Tabs.TabPane tab="unRead" key={0}>
            <div className="d-flex justify-content-end">
              <h4 className="p2" onClick={handleMarkAllRead}>
                Mark All Read
              </h4>
            </div>
            {user?.notification.map((notificationMgs) => (
              <div className="card" style={{ cursor: "pointer" }}>
                <div
                  className="card-text"
                  onClick={() => navigate(notificationMgs.onClickPath)}
                >
                  {notificationMgs.message}
                </div>
              </div>
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane tab="Read" key={1}>
            <div className="d-flex justify-content-end">
              <h4 className="p2" onClick={handleDeleteAllRead}>
                Delete All Read
              </h4>
            </div>
          </Tabs.TabPane>
        </Tabs>
      </Layout>
    </>
  );
}