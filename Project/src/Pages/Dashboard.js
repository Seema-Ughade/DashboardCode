import React from 'react'
import PieChartComponent from './PieChartComponent'; // Adjust the path as per your project structure

import {
  CopyrightOutlined,
  ScheduleOutlined,
  MobileOutlined,
  ClockCircleOutlined,
  EyeOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { Card, Col, Row } from 'antd';

import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;

const columns = [
  {
    title: "Compaign Name",
    dataIndex: "compaignName",
  },
  {
    title: "Salesman",
    dataIndex: "salesman",
  },
  {
    title: "Booking Time",
    dataIndex: "bookingtime",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];
const data1 = [];
for (let i = 0; i < 40; i++) {
  data1.push({
    compaignName: `Social Media Campaign ${i}`,
    salesman: "Turner Hoeger MD	",
    bookingtime: "21-06-2024,11.32pm",
    action: [<PlayCircleOutlined className='bg-teal-400 px-2 text-white text-center border w-8 h-8 mx-2' />, <EyeOutlined className='text-white text-center border px-2 w-8 h-8 mx-2 rounded bg-blue-700' />]
  });
}
const columns2 = [
  {
    title: "Compaign Name",
    dataIndex: "compaignName",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
]
const data2 = []
for (let i = 0; i < 40; i++) {
  data2.push({
    compaignName: `Social Media Campaign ${i}`,
    action: [<PlayCircleOutlined className='bg-teal-400 px-2 text-white text-center border w-8 h-8 mx-2' />, <EyeOutlined className='text-white text-center border px-2 w-8 h-8 mx-2 rounded bg-blue-700' />]

  })
}
function Dashboard() {
  const data = [
    {
      type: "2024-06-10",
      sales: 0.5,
    },
    {
      type: "2024-06-15",
      sales: 1,
    },
    {
      type: "2024-06-16",
      sales: 2,
    },
    {
      type: "2024-06-17",
      sales: 3,
    },

    {
      type: "2024-06-18",
      sales: 20,
    },

  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      // position: "",
      style: {
        fill: "#00d293",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        style: {
          fill: "#00d293",

        },
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "sales",
      },
      sales: {
        alias: "Income",
      },
    },
  };


  return (
    <div>
      <h2 className="text-2xl dark:text-white mb-4">Dashboard</h2>
      <div className='mb-5'>
        <Space direction="vertical" size={15}>
          <RangePicker />
        </Space>

      </div>

      <div class="grid gap-4 grid-cols-4">
        <div className='flex bg-white rounded p-7'>
          <div>
            <button type="button"
              className="text-white mx-3 border focus:outline-none  
    font-medium rounded-lg text-lg p-6
    text-center inline-flex items-center"
              style={{ background: "#08979c" }}>

              <CopyrightOutlined />
            </button>
          </div>
          <div>
            <p className=' font-semibold'>5</p>
            <p className='text-gray-400'>Active Compaigns</p>
          </div>
        </div>
        <div className='flex bg-white rounded p-7'>
          <div>
            <button type="button"
              className="text-white mx-3 border 
  focus:outline-none  font-medium rounded-lg 
  text-lg p-6 text-center inline-flex items-center"
              style={{ background: "#389e0d" }}>
              <ScheduleOutlined />
            </button>
          </div>
          <div>
            <p className='2xl font-semibold'>1</p>
            <p className='text-gray-400'>Total Follow up</p>
          </div>


        </div>
        <div className='flex bg-white rounded p-7'>
          <div>
            <button type="button" className="text-white mx-3 border focus:outline-none  font-medium rounded-lg text-lg p-6 text-center inline-flex items-center" style={{ background: "#d46b08" }}>
              <MobileOutlined />
            </button>
          </div>
          <div>
            <p className='2xl font-semibold'>44</p>
            <p className='text-gray-400'>Call Made</p>
          </div>


        </div>
        <div className='flex bg-white rounded p-7'>
          <div>
            <button type="button" className="text-white mx-2 border focus:outline-none  font-medium rounded-lg text-lg p-5 text-center inline-flex items-center" style={{ background: "#ffa39e" }}>
              < ClockCircleOutlined />
            </button>
          </div>
          <div>
            <h5 className=' font-semibold'>2 H,28 M,28S</h5>
            <p className='text-gray-400'>Total Duration</p>
          </div>

        </div>
      </div>
      <div className='my-4'>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Active Actioned Campaigns" bordered={false}>


            <PieChartComponent />



            </Card>
          </Col>
          <Col span={16}>
            <Card title="Call Made" bordered={false}>
              <div>
                <Column {...config} />
              </div>
            </Card>
          </Col>

        </Row>
      </div>


      <div>
        <Row gutter={16}>
          <Col span={16}>
            <Card title="salesmans booking" bordered={false}>
            
              <div>
                <Table columns={columns} dataSource={data1} />
              </div>

            </Card>
          </Col>
          <Col span={8}>
            <Card title=" Follow up" bordered={false}>
              <div>
                <Table columns={columns2} dataSource={data2} />

              </div>
            </Card>
          </Col>

        </Row>
      </div>





    </div>
  )
}

export default Dashboard
