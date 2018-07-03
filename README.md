# cfn-modules: RDS PostgreSQL

RDS PostgreSQL with secure firewall configuration, [encryption](https://www.npmjs.com/package/@cfn-modules/kms-key), multi AZ, backup enabled, and [alerting](https://www.npmjs.com/package/@cfn-modules/alerting).

## Install

> Install [Node.js and npm](https://nodejs.org/) first!

```
npm i @cfn-modules/rds-postgres
```

## Usage

```
---
AWSTemplateFormatVersion: '2010-09-09'
Description: 'cfn-modules example'
Resources:
  Function:
    Type: 'AWS::CloudFormation::Stack'
    Properties:
      Parameters:
        VpcModule: !GetAtt 'Vpc.Outputs.StackName' # required
        ClientSgModule: !GetAtt 'Client.Outputs.StackName' # required
        AlertingModule: '' # optional
        HostedZoneModule: '' # optional
        BastionModule: '' # optional
        KmsKeyModule: '' # optional
        DBSnapshotIdentifier: '' # optional
        DBAllocatedStorage: 5 # optional
        DBInstanceClass: 'db.t2.micro' # optional
        DBName: '' # optional
        DBBackupRetentionPeriod: 30 # optional
        DBMasterUsername: 'master' # optional
        DBMasterUserPassword: '' # required if DBSnapshotIdentifier is not set
        DBMultiAZ: true # optional
        SubDomainNameWithDot: 'postgres.' # optional
      TemplateURL: './node_modules/@cfn-modules/rds-postgres/module.yml'
```

## Parameters

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
      <th>Required?</th>
      <th>Allowed values</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VpcModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/vpc">vpc module</a></td>
      <td></td>
      <td>yes</td>
      <td></td>
    </tr>
    <tr>
      <td>ClientSgModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/client-sg">client-sg module</a> where traffic is allowed from on port 5432 to the database</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>AlertingModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/alerting">alerting module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>HostedZoneModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/search?q=keywords:cfn-modules:HostedZone">module implementing HostedZone</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>BastionModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/search?q=keywords:cfn-modules:Bastion">module implementing Bastion</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>HostedZoneModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/search?q=keywords:cfn-modules:HostedZone">module implementing HostedZone</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>KmsKeyModule</td>
      <td>Stack name of <a href="https://www.npmjs.com/package/@cfn-modules/kms-key">kms-key module</a></td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>DBSnapshotIdentifier</td>
      <td>Name or Amazon Resource Name (ARN) of the DB snapshot from which you want to restore (leave blank to create an empty database)</td>
      <td></td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>DBAllocatedStorage</td>
      <td>The allocated storage size, specified in GB (ignored when DBSnapshotIdentifier is set, value used from snapshot)</td>
      <td>5</td>
      <td>no</td>
      <td>[5-16384]</td>
    </tr>
    <tr>
      <td>DBInstanceClass</td>
      <td>The instance type of the database</td>
      <td>db.t2.micro</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
    <tr>
      <td>DBName</td>
      <td>Name of the database (ignored when DBSnapshotIdentifier is set, value used from snapshot)</td>
      <td>auto generated value</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>DBBackupRetentionPeriod</td>
      <td>The number of days to keep snapshots of the database</td>
      <td>35</td>
      <td>no</td>
      <td>[0-35]</td>
    </tr>
    <tr>
      <td>DBMasterUsername</td>
      <td>The master user name for the DB instance (ignored when DBSnapshotIdentifier is set, value used from snapshot)</td>
      <td>master</td>
      <td>no</td>
      <td></td>
    </tr>
    <tr>
      <td>DBMasterUserPassword</td>
      <td>The master password for the DB instance (ignored when DBSnapshotIdentifier is set, value used from snapshot)</td>
      <td></td>
      <td>yes (no if DBSnapshotIdentifier is set)</td>
      <td></td>
    </tr>
    <tr>
      <td>DBMultiAZ</td>
      <td>Specifies if the database instance is deployed to multiple Availability Zones for HA</td>
      <td>true</td>
      <td>no</td>
      <td>[true, false]</td>
    </tr>
    <tr>
      <td>SubDomainNameWithDot</td>
      <td>Name that is used to create the DNS entry with trailing dot, e.g. ${SubDomainNameWithDot}${HostedZoneName}. Leave blank for naked (or apex and bare) domain. Requires HostedZoneModule parameter!</td>
      <td>test.</td>
      <td>no</td>
      <td></td>
    </tr>
  </tbody>
</table>
