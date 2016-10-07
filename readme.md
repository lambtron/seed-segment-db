
# Segment Seed Fake Data

## Requirements

node, npm, postgres.

## Installation

```
npm install
```

## Usage

Start your local postgres instance.

### Create tables

```
$ node create.js
```

Using your command line postgres, you can see the tables created:

```
segmentlooker=# \d
              List of relations
 Schema |      Name       | Type  |   Owner
--------+-----------------+-------+-----------
 public | app_opened      | table | andyjiang
 public | order_completed | table | andyjiang
 public | product_added   | table | andyjiang
 public | stripe          | table | andyjiang
 public | users           | table | andyjiang
 public | zendesk         | table | andyjiang
```

### Insert rows

```
$ node index.js
```

Using your command line postgres, you can see the tables popoulated:

```
segmentlooker=# select * from app_opened
segmentlooker-# ;
               user_id                |      received_at
--------------------------------------+------------------------
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-09-03 07:36:50-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-20 09:23:47-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-09-02 17:04:01-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-22 08:17:48-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-04 23:31:18-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-09-26 02:55:39-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-05 23:22:19-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-12 04:23:42-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-31 18:23:07-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-22 11:00:04-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-13 03:50:20-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-09-11 11:48:56-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-08-11 05:50:43-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-10-06 08:56:24-07
 06b67cb7-778e-48a4-8ea0-2fa4a19ba3a2 | 2016-09-17 15:47:19-07
```

The `index.js` randomizes all of the tables _and_ inserts them into the tables.

