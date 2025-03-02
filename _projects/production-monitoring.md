---
title: "Production Monitoring"
excerpt: "Production Monitoring is a full-stack application designed to collect and analyze real-time production data from industrial devices like barcode readers. It features a background service that reads data via TCP, queues it for processing, and consolidates it before storing it in a PostgreSQL database using an ASP.NET Core API. The system provides real-time insights into production status, including SKU tracking, production speed, estimated completion times, and plan management. The frontend, built with React, TypeScript, and Tailwind CSS, offers an intuitive dashboard with visualizations like semi-circle charts for better data interpretation."
coverImage: "/images/production_monitoring_1.png"
date: "2025-03-02T08:00:00Z"
githubLink: "private"
tool: "React,TypeScript,Vite,Tailwind,C#,ASP.NET Core API,PostgreSQL,TCP/IP"
---

![production monitoring screenshot](/images/production_monitoring_1.png)

## Project Overview

Production Monitoring is a full-stack application designed to collect and analyze real-time production data from industrial devices like barcode readers. It features a background service that reads data via TCP, queues it for processing, and consolidates it before storing it in a PostgreSQL database using an ASP.NET Core API. The system provides real-time insights into production status, including SKU tracking, production speed, estimated completion times, and plan management. The frontend, built with React, TypeScript, and Tailwind CSS, offers an intuitive dashboard with visualizations like semi-circle charts for better data interpretation.

## Summary Key Features

- **Real-time Data Collection:**

  Reads production data from industrial barcode readers via TCP.

- **Queue Processing:**

  Efficiently queues and consolidates data before inserting it into the database.

- **Production Tracking:**

  Displays real-time SKU production count and speed.

- **Performance Analytics:**

  Estimates completion time based on current production rates.

- **Plan & SKU Management:**

  Enables users to manage production plans and SKU details.

- **Dashboard with Visuals:**

  Provides a semi-circle chart and other graphical insights for easy monitoring.

- **Full-Stack Implementation:**

  Built with ASP.NET Core API for backend, React with TypeScript and Tailwind CSS for frontend, and PostgreSQL for data storage.
