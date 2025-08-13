document.addEventListener('DOMContentLoaded', function() {
    // Questions data
    const questions = [
        // Section 3.1: Organizational Processes and Procedures
        {
            id: 1,
            section: "3.1",
            question: "Which of the following is created to illustrate the effectiveness of wireless networking coverage in a building?",
            options: [
                "A. Logical diagram",
                "B. Layer 3 network diagram",
                "C. Service-level agreement",
                "D. Heat map"
            ],
            answer: "D",
            explanation: "A heat map is a visual representation of wireless signal strength and coverage across a physical space. It shows where the signal is strong (often in warm colors like red) and where it's weak (cool colors like blue). The other options don't show wireless coverage: A logical diagram shows network devices and connections abstractly, a Layer 3 diagram focuses on routing, and an SLA is a service contract."
        },
        {
            id: 2,
            section: "3.1",
            question: "Which of the following diagrams would most likely include specifications about fiber connector types?",
            options: [
                "A. Logical",
                "B. Physical",
                "C. Rack",
                "D. Routing"
            ],
            answer: "B",
            explanation: "Physical network diagrams show the actual physical components and connections, including details like cable types and connector specifications. Logical diagrams (A) show abstract connections, rack diagrams (C) show equipment placement in racks, and routing diagrams (D) focus on network paths."
        },
        {
            id: 3,
            section: "3.1",
            question: "A network administrator is conducting an assessment and found network devices that do not meet standards. Which of the following configurations is considered a set of rules that devices should adhere to?",
            options: [
                "A. Production",
                "B. Backup",
                "C. Candidate",
                "D. Golden"
            ],
            answer: "D",
            explanation: "A 'golden' configuration is the standardized, approved configuration that all devices should follow. Production (A) is the active configuration, backup (B) is a saved copy, and candidate (C) is a proposed configuration that hasn't been applied yet."
        },
        {
            id: 4,
            section: "3.1",
            question: "A network technician notices a device is at EOL. For which of the following should the technician plan?",
            options: [
                "A. Retrofitting",
                "B. Decommissioning",
                "C. Restarting",
                "D. Upgrading"
            ],
            answer: "B",
            explanation: "EOL (End of Life) means the manufacturer will no longer support the device, so it should be decommissioned and replaced. Retrofitting (A) is modifying old equipment, restarting (C) is temporary, and upgrading (D) might not be possible for EOL devices."
        },
        {
            id: 5,
            section: "3.1",
            question: "Which of the following is a difference between EOL and EOS?",
            options: [
                "A. EOL discontinues the product but may offer support.",
                "B. EOS replaces free support with a subscription model.",
                "C. EOS only applies to physical products.",
                "D. EOL still guarantees warranty service."
            ],
            answer: "A",
            explanation: "EOL (End of Life) means the product is discontinued but might still get limited support. EOS (End of Support) means all support ends. B is incorrect because EOS doesn't imply subscription support. C is wrong because EOS applies to software too. D is incorrect because EOL typically ends warranty service."
        },
        {
            id: 6,
            section: "3.1",
            question: "Application software systems can no longer receive updates and security patches, and continuing to use the application software might expose the system to attacks. Which of the following best describes this scenario?",
            options: [
                "A. SLA",
                "B. Licensing",
                "C. SIEM",
                "D. EOL"
            ],
            answer: "D",
            explanation: "This describes End of Life (EOL) where software is no longer supported. SLA (A) is a service contract, licensing (B) refers to usage rights, and SIEM (C) is a security monitoring system."
        },
        {
            id: 7,
            section: "3.1",
            question: "Which of the following should be included in an SLA?",
            options: [
                "A. Patches and bug fixes",
                "B. Licensing",
                "C. Inventory management",
                "D. Stakeholders"
            ],
            answer: "A",
            explanation: "An SLA (Service Level Agreement) defines service expectations including maintenance like patches and bug fixes. Licensing (B) is typically separate, inventory (C) is internal, and while stakeholders (D) are important, they're not SLA content."
        },
        {
            id: 8,
            section: "3.1",
            question: "A network technician receives a new ticket while working on another issue. The new ticket is critical to business operations. Which of the following documents should the technician reference to determine which ticket to complete first?",
            options: [
                "A. NDA",
                "B. AUP",
                "C. SLA",
                "D. MOU"
            ],
            answer: "C",
            explanation: "The SLA defines priority levels and response times. NDA (A) is about confidentiality, AUP (B) is acceptable use policy, and MOU (D) is a memorandum of understanding between organizations."
        },
        {
            id: 9,
            section: "3.1",
            question: "A network engineer receives a vendor alert regarding a vulnerability in a router CPU. Which of the following should the engineer do to resolve the issue?",
            options: [
                "A. Update the firmware.",
                "B. Replace the system board.",
                "C. Patch the OS.",
                "D. Isolate the system."
            ],
            answer: "A",
            explanation: "CPU vulnerabilities typically require firmware updates. Replacing hardware (B) is excessive unless the CPU is defective. Router OS patches (C) wouldn't fix CPU issues. Isolation (D) might be temporary but doesn't resolve the vulnerability."
        },
        {
            id: 10,
            section: "3.1",
            question: "A critical infrastructure switch is identified as end-of-support. Which of the following is the best next step to ensure security?",
            options: [
                "A. Apply the latest patches and bug fixes.",
                "B. Decommission and replace the switch.",
                "C. Ensure the current firmware has no issues.",
                "D. Isolate the switch from the network."
            ],
            answer: "B",
            explanation: "End-of-support devices won't receive security updates, so replacement is necessary. Patching (A) isn't possible without support. Checking firmware (C) doesn't address future vulnerabilities. Isolation (D) would disrupt service."
        },
        {
            id: 11,
            section: "3.1",
            question: "During a security audit, a consulting firm notices inconsistencies between the documentation and the environment. Which of the following can keep a record of who made the changes and what the changes are?",
            options: [
                "A. Network access control (NAC)",
                "B. Configuration monitoring",
                "C. Zero Trust",
                "D. Syslog"
            ],
            answer: "B",
            explanation: "Configuration monitoring tracks changes to network devices. NAC (A) controls access, Zero Trust (C) is a security model, and syslog (D) records events but not necessarily configuration changes."
        },
        {
            id: 12,
            section: "3.1",
            question: "Which of the following source control features allows an administrator to test a new configuration without changing the primary configuration?",
            options: [
                "A. Central repository",
                "B. Conflict identification",
                "C. Branching",
                "D. Version control"
            ],
            answer: "C",
            explanation: "Branching creates a separate copy for testing. A repository (A) stores files, conflict identification (B) finds merge issues, and version control (D) tracks changes but doesn't inherently provide testing environments."
        },
        {
            id: 13,
            section: "3.1",
            question: "Which of the following is concerned with guaranteed availability of a cloud resource?",
            options: [
                "A. IPAM",
                "B. SLA",
                "C. MTBF",
                "D. EOL"
            ],
            answer: "B",
            explanation: "SLAs define availability guarantees. IPAM (A) manages IP addresses, MTBF (C) is mean time between failures (a reliability metric), and EOL (D) indicates product discontinuation."
        },
        // Section 3.2: Network Monitoring Technologies
        {
            id: 14,
            section: "3.2",
            question: "A network security administrator needs to monitor the contents of data sent between a secure network and the rest of the company. Which of the following monitoring methods will accomplish this task?",
            options: [
                "A. Port mirroring",
                "B. Flow data",
                "C. Syslog entries",
                "D. SNMP traps"
            ],
            answer: "A",
            explanation: "Port mirroring copies all network packets for inspection. Flow data (B) shows traffic patterns but not content, syslog (C) records system events, and SNMP traps (D) alert about device status changes."
        },
        {
            id: 15,
            section: "3.2",
            question: "A network administrator is planning to implement device monitoring to enhance network visibility. The security team requires that the solution provides authentication and encryption. Which of the following meets these requirements?",
            options: [
                "A. SIEM",
                "B. Syslog",
                "C. NetFlow",
                "D. SNMPv3"
            ],
            answer: "D",
            explanation: "SNMPv3 adds authentication and encryption. SIEM (A) analyzes logs but doesn't collect them securely by itself. Syslog (B) and NetFlow (C) typically lack built-in security."
        },
        {
            id: 16,
            section: "3.2",
            question: "A network manager wants to view network traffic for devices connected to a switch. A network engineer connects an appliance to a free port on the switch and needs to configure the switch port connected to the appliance. Which of the following is the best option for the engineer to enable?",
            options: [
                "A. Trunking",
                "B. Port mirroring",
                "C. Full duplex",
                "D. SNMP"
            ],
            answer: "B",
            explanation: "Port mirroring copies traffic from other ports to the monitoring port. Trunking (A) carries multiple VLANs, full duplex (C) improves bandwidth but doesn't help monitoring, and SNMP (D) provides device stats but not traffic content."
        },
        {
            id: 17,
            section: "3.2",
            question: "An administrator is setting up an SNMP server for use in the enterprise network and needs to create device IDs within a MIB. Which of the following describes the function of a MIB?",
            options: [
                "A. DHCP relay device",
                "B. Policy enforcement point",
                "C. Definition file for event translation",
                "D. Network access controller"
            ],
            answer: "C",
            explanation: "A MIB (Management Information Base) defines the structure of management data for SNMP, translating numeric OIDs to human-readable names. It's not related to DHCP (A), policy (B), or access control (D)."
        },
        {
            id: 18,
            section: "3.2",
            question: "An organization wants better network visibility. The organization's requirements include: Multivendor/OS-monitoring capabilities, Real-time collection, Data correlation. Which of the following meets these requirements?",
            options: [
                "A. SNMP",
                "B. SIEM",
                "C. Nmap",
                "D. Syslog"
            ],
            answer: "B",
            explanation: "SIEM (Security Information and Event Management) systems collect and correlate data from multiple sources in real-time. SNMP (A) and syslog (D) don't correlate data, and Nmap (C) is for network scanning."
        },
        {
            id: 19,
            section: "3.2",
            question: "An administrator is evaluating the use of authentication within SNMP. Which of the following is the most secure way of authenticating devices using only SNMP?",
            options: [
                "A. Use version 1 of SNMP and use a community string to serve as a PSK",
                "B. Use version 3 of SNMP and set up trap messages for critical events on the network",
                "C. Use version 2c of SNMP and use informs to validate device authentication",
                "D. Use version 2u of SNMP to authenticate devices for network monitoring"
            ],
            answer: "B",
            explanation: "SNMPv3 is the only version with strong authentication. v1 (A) uses plaintext community strings. v2c (C) is slightly better but still insecure. There is no v2u (D)."
        },
        {
            id: 20,
            section: "3.2",
            question: "A network engineer is now in charge of all SNMP management in the organization. The engineer must use a SNMP version that does not utilize plaintext data. Which of the following is the minimum version of SNMP that supports this requirement?",
            options: [
                "A. v1",
                "B. v2c",
                "C. v2u",
                "D. v3"
            ],
            answer: "D",
            explanation: "Only SNMPv3 encrypts data. v1 (A) and v2c (B) use plaintext. v2u (C) doesn't exist."
        },
        {
            id: 21,
            section: "3.2",
            question: "A network administrator needs to improve network monitoring. Which of the following should the administrator do first?",
            options: [
                "A. Establish baseline metrics.",
                "B. Implement a SIEM.",
                "C. Perform regular packet captures.",
                "D. Conduct availability monitoring."
            ],
            answer: "A",
            explanation: "Baselines establish normal behavior for comparison. SIEM (B), packet captures (C), and availability monitoring (D) are all useful but require knowing what's normal first."
        },
        {
            id: 22,
            section: "3.2",
            question: "A network engineer wants to implement a solution where all web servers will send event data over port 514. Which of the following services will accomplish this task?",
            options: [
                "A. Syslog",
                "B. SMTP",
                "C. DNS",
                "D. DHCP"
            ],
            answer: "A",
            explanation: "Syslog uses UDP/TCP port 514 for log messages. SMTP (B) is for email (port 25), DNS (C) uses 53, and DHCP (D) uses 67/68."
        },
        {
            id: 23,
            section: "3.2",
            question: "After a recent merger, a large number of alerts are coming in regarding extremely high utilization. Which of the following should be generated to help inform new alerting requirements?",
            options: [
                "A. SLA",
                "B. Network diagram",
                "C. Baseline",
                "D. Heat map"
            ],
            answer: "C",
            explanation: "A new baseline establishes what's normal after the merger. SLA (A) defines service levels, diagrams (B) show topology, and heat maps (D) show wireless coverage."
        },
        {
            id: 24,
            section: "3.2",
            question: "A company has been added to an unapproved list because of spam. The network administrator confirmed that a workstation was infected by malware. Which of the following processes did the administrator use to identify the root cause?",
            options: [
                "A. Traffic analysis",
                "B. Availability monitoring",
                "C. Baseline metrics",
                "D. Network discovery"
            ],
            answer: "A",
            explanation: "Identifying spam sources requires analyzing network traffic. Availability monitoring (B) checks uptime, baselines (C) establish norms, and discovery (D) finds devices."
        },
        {
            id: 25,
            section: "3.2",
            question: "A network administrator has been monitoring the company's servers to ensure that they are available. Which of the following should the administrator use for this task?",
            options: [
                "A. Packet capture",
                "B. Data usage reports",
                "C. SNMP traps",
                "D. Configuration monitoring"
            ],
            answer: "C",
            explanation: "SNMP traps alert when devices become unavailable. Packet captures (A) inspect traffic, usage reports (B) track bandwidth, and configuration monitoring (D) tracks device settings."
        },
        {
            id: 26,
            section: "3.2",
            question: "A network administrator needs to monitor data from recently installed firewalls in multiple locations. Which of the following solutions would best meet the administrator's needs?",
            options: [
                "A. IDS",
                "B. IPS",
                "C. SIEM",
                "D. SNMPv2"
            ],
            answer: "C",
            explanation: "SIEM centralizes logs from multiple firewalls. IDS (A) detects intrusions, IPS (B) prevents them, and SNMPv2 (D) lacks security and doesn't handle firewall logs well."
        },
        {
            id: 27,
            section: "3.2",
            question: "A network administrator needs to securely connect to an Ubuntu server for management purposes. Which of the following protocols will most likely address this requirement?",
            options: [
                "A. HTTPS",
                "B. SFTP",
                "C. RDP",
                "D. SSH"
            ],
            answer: "D",
            explanation: "SSH is the standard secure remote access protocol for Linux/Ubuntu. HTTPS (A) is for web, SFTP (B) is for file transfer, and RDP (C) is Windows remote desktop."
        },
        {
            id: 28,
            section: "3.2",
            question: "A network administrator received reports that a 40Gb connection is saturated. The only server the administrator can use for data collection in that location has a 10Gb connection to the network. Which of the following is the best method to use on the server to determine the source of the saturation?",
            options: [
                "A. Port mirroring",
                "B. Log aggregation",
                "C. Flow data",
                "D. Packet capture"
            ],
            answer: "C",
            explanation: "Flow data (like NetFlow) provides traffic statistics without the bandwidth requirements of full packet captures (D). Port mirroring (A) would overwhelm the 10Gb server, and logs (B) don't show traffic patterns."
        },
        {
            id: 29,
            section: "3.2",
            question: "A network technician is troubleshooting an issue between a web server and computers within a LAN. The technician needs to gather information about the IP addresses, protocols, and content of the traffic. Which of the following will best help the technician troubleshoot the issue?",
            options: [
                "A. Flow data",
                "B. SNMP traps",
                "C. Packet capture",
                "D. Server logs"
            ],
            answer: "C",
            explanation: "Packet captures show complete traffic details. Flow data (A) is summarized, SNMP traps (B) are device alerts, and server logs (D) show application events."
        },
        {
            id: 30,
            section: "3.2",
            question: "A network administrator needs to secure SNMP access with authentication and encryption. Which of the following should the administrator use?",
            options: [
                "A. SNMPv3",
                "B. SNMP community string",
                "C. SNMP ACL access group",
                "D. SNMPv2c"
            ],
            answer: "A",
            explanation: "Only SNMPv3 provides authentication and encryption. Community strings (B) are plaintext passwords, ACLs (C) restrict access but don't encrypt, and v2c (D) is insecure."
        },
        {
            id: 31,
            section: "3.2",
            question: "A network engineer wants to implement a secure solution that provides authentication and encryption to gather and monitor logs within the company network. Which of the following tools will accomplish this task?",
            options: [
                "A. Syslog",
                "B. RADIUS",
                "C. SNMPv3",
                "D. API"
            ],
            answer: "C",
            explanation: "SNMPv3 securely collects device data. Syslog (A) is typically unencrypted, RADIUS (B) is for authentication, and APIs (D) aren't a monitoring protocol."
        },
        {
            id: 32,
            section: "3.2",
            question: "After a recent corporate merger, a network administrator needs to build reference documentation on multivendor infrastructure. Which of the following protocols will provide the information?",
            options: [
                "A. ICMP",
                "B. CDP",
                "C. LLDP",
                "D. SIP"
            ],
            answer: "C",
            explanation: "LLDP (Link Layer Discovery Protocol) is vendor-neutral for discovering devices. CDP (B) is Cisco-proprietary. ICMP (A) is for ping/traceroute, and SIP (D) is for VoIP."
        },
        {
            id: 33,
            section: "3.2",
            question: "A company discovers on video surveillance recordings that an unauthorized person installed a rogue access point in its secure facility. Which of the following allowed the unauthorized person to do this?",
            options: [
                "A. Evil twin",
                "B. Honeytrap",
                "C. Wardriving",
                "D. Tailgating"
            ],
            answer: "D",
            explanation: "Tailgating is following someone into a secure area. Evil twin (A) is a fake AP, honeytrap (B) is a security decoy, and wardriving (C) is finding wireless networks from outside."
        },
        // Section 3.3: Disaster Recovery (DR) Concepts
        {
            id: 34,
            section: "3.3",
            question: "Which of the following disaster recovery metrics describes the average length of time a piece of equipment can be expected to operate normally?",
            options: [
                "A. RPO",
                "B. RTO",
                "C. MTTR",
                "D. MTBF"
            ],
            answer: "D",
            explanation: "MTBF (Mean Time Between Failures) measures equipment reliability. RPO (A) is data loss tolerance, RTO (B) is recovery time, and MTTR (C) is repair time."
        },
        {
            id: 35,
            section: "3.3",
            question: "A company wants to implement a disaster recovery site for non-critical applications, which can tolerate a short period of downtime. Which of the following types of sites should the company implement to achieve this goal?",
            options: [
                "A. Hot",
                "B. Cold",
                "C. Warm",
                "D. Passive"
            ],
            answer: "C",
            explanation: "A warm site has some equipment ready but isn't fully operational, balancing cost and recovery time. Hot sites (A) are fully ready (expensive), cold sites (B) are empty space (slow recovery), and passive (D) isn't a standard DR term."
        },
        {
            id: 36,
            section: "3.3",
            question: "Which of the following is used to estimate the average life span of a device?",
            options: [
                "A. RPO",
                "B. RTO",
                "C. MTTR",
                "D. MTBF"
            ],
            answer: "D",
            explanation: "MTBF estimates device lifespan. RPO (A) and RTO (B) are recovery metrics, and MTTR (C) measures repair time."
        },
        {
            id: 37,
            section: "3.3",
            question: "Which of the following activities would have groups from different departments evaluate the disaster recovery process?",
            options: [
                "A. Validation test",
                "B. SLA alignment",
                "C. Tabletop exercises",
                "D. Active-active approach"
            ],
            answer: "C",
            explanation: "Tabletop exercises simulate disasters with team discussions. Validation tests (A) check specific systems, SLA alignment (B) ensures contracts match needs, and active-active (D) is a redundancy approach."
        },
        {
            id: 38,
            section: "3.3",
            question: "Which of the following is used to describe the average duration of an outage for a specific service?",
            options: [
                "A. RPO",
                "B. MTTR",
                "C. RTO",
                "D. MTBF"
            ],
            answer: "B",
            explanation: "MTTR (Mean Time To Repair) measures outage duration. RPO (A) is data loss, RTO (C) is recovery time objective, and MTBF (D) is between failures."
        },
        {
            id: 39,
            section: "3.3",
            question: "Which of the following disaster recovery metrics is used to describe the amount of data that is lost since the last backup?",
            options: [
                "A. MTTR",
                "B. RTO",
                "C. RPO",
                "D. MTBF"
            ],
            answer: "C",
            explanation: "RPO (Recovery Point Objective) defines acceptable data loss. MTTR (A) is repair time, RTO (B) is recovery time, and MTBF (D) is between failures."
        },
        {
            id: 40,
            section: "3.3",
            question: "A network administrator needs to fail over services to an off-site environment. This process will take four weeks to become fully operational. Which of the following DR concepts does this describe?",
            options: [
                "A. Hot site",
                "B. Warm site",
                "C. Cold site",
                "D. Active-active approach"
            ],
            answer: "C",
            explanation: "Cold sites require significant setup time (weeks). Hot sites (A) are immediate, warm sites (B) take hours/days, and active-active (D) has no failover delay."
        },
        {
            id: 41,
            section: "3.3",
            question: "Which of the following disaster recovery concepts is calculated by dividing the total hours of operation by the total number of units?",
            options: [
                "A. MTTR",
                "B. MTBF",
                "C. RPO",
                "D. RTO"
            ],
            answer: "B",
            explanation: "MTBF = Total operational hours / Number of failures. MTTR (A) is repair time, RPO (C) is data loss, and RTO (D) is recovery time."
        },
        {
            id: 42,
            section: "3.3",
            question: "An investment bank is seeking a DR backup solution. Which of the following provides the most cost-effective backup site?",
            options: [
                "A. Hot",
                "B. Cold",
                "C. Cluster",
                "D. Warm"
            ],
            answer: "B",
            explanation: "Cold sites are most cost-effective (just space). Hot sites (A) are expensive (fully equipped), clusters (C) are high-availability systems, and warm sites (D) have some equipment."
        },
        {
            id: 43,
            section: "3.3",
            question: "Which of the following is the greatest advantage of maintaining a cold DR site compared to other DR sites?",
            options: [
                "A. Redundancy",
                "B. Availability",
                "C. Security",
                "D. Cost"
            ],
            answer: "D",
            explanation: "Cold sites are cheapest to maintain. They lack immediate availability (B) or redundancy (A), and security (C) isn't inherently better."
        },
        {
            id: 44,
            section: "3.3",
            question: "Which of the following will most likely allow a network administrator to work with current data after a disaster?",
            options: [
                "A. Review backup tapes.",
                "B. Recover from cloud storage.",
                "C. Fail over to a hot site.",
                "D. Restore from a snapshot."
            ],
            answer: "C",
            explanation: "Hot sites have current data and immediate failover. Tapes (A) and snapshots (D) may be outdated, and cloud recovery (B) depends on sync frequency."
        },
        {
            id: 45,
            section: "3.3",
            question: "Which of the following facilities is the best example of a warm site in the event of information system disruption?",
            options: [
                "A. A combination of public and private cloud services to restore data",
                "B. A partial infrastructure, software, and data on site",
                "C. A full electrical infrastructure in place, but no customer devices on site",
                "D. A full infrastructure in place, but no current data on site"
            ],
            answer: "D",
            explanation: "Warm sites have infrastructure but need data restored. A describes hybrid cloud, B is vague, and C describes a cold site with power."
        },
        // Section 3.4: IPv4 and IPv6 Network Services
        {
            id: 46,
            section: "3.4",
            question: "A network administrator needs to change where the outside DNS records are hosted. Which of the following records should the administrator change at the registrar to accomplish this task?",
            options: [
                "A. NS",
                "B. SOA",
                "C. PTR",
                "D. CNAME"
            ],
            answer: "A",
            explanation: "NS (Name Server) records point to authoritative DNS servers. SOA (B) defines zone parameters, PTR (C) is for reverse DNS, and CNAME (D) is an alias."
        },
        {
            id: 47,
            section: "3.4",
            question: "An organization moved its DNS servers to new IP addresses. After this move, customers are no longer able to access the organization's website. Which of the following DNS entries should be updated?",
            options: [
                "A. AAA",
                "B. CNAME",
                "C. MX",
                "D. NS"
            ],
            answer: "D",
            explanation: "NS records point to DNS servers and must be updated when they move. AAAA (A) is IPv6, CNAME (B) is aliases, and MX (C) is for mail servers."
        },
        {
            id: 48,
            section: "3.4",
            question: "A company's marketing team created a new application and would like to create a DNS record for newapplication.comptia.org that always resolves to the same address as www.comptia.org. Which of the following records should the administrator use?",
            options: [
                "A. SOA",
                "B. MX",
                "C. CNAME",
                "D. NS"
            ],
            answer: "C",
            explanation: "CNAME creates an alias to another name. SOA (A) defines zone info, MX (B) is for mail, and NS (C) points to DNS servers."
        },
        {
            id: 49,
            section: "3.4",
            question: "A network engineer performed a migration to a new mail server. The engineer changed the MX record, verified the change was accurate, and confirmed the new mail server was reachable via the IP address in the A record. However, users are not receiving email. Which of the following should the engineer have done to prevent the issue from occurring?",
            options: [
                "A. Change the email client configuration to match the MX record.",
                "B. Reduce the TTL record prior to the MX record change.",
                "C. Perform a DNS zone transfer prior to the MX record change.",
                "D. Update the NS record to reflect the IP address change."
            ],
            answer: "B",
            explanation: "Reducing TTL (Time To Live) before changes ensures faster DNS propagation. Email clients (A) use DNS automatically, zone transfers (C) copy between DNS servers, and NS records (D) point to DNS servers."
        },
        {
            id: 50,
            section: "3.4",
            question: "A network administrator is troubleshooting issues with a DHCP server at a university. More students have recently arrived on campus, and the users are unable to obtain an IP address. Which of the following should the administrator do to address the issue?",
            options: [
                "A. Enable IP helper.",
                "B. Change the subnet mask.",
                "C. Increase the scope size.",
                "D. Add address exclusions."
            ],
            answer: "C",
            explanation: "The DHCP scope (address pool) needs to be larger. IP helper (A) relays DHCP across subnets, subnet mask (B) defines network size, and exclusions (D) reserve addresses."
        },
        {
            id: 51,
            section: "3.4",
            question: "A network administrator installed a new VLAN to the network after a company added an additional floor to the office. Users are unable to obtain an IP address on the new VLAN, but ports on existing VLANs are working properly. Which of the following configurations should the administrator update?",
            options: [
                "A. Scope size",
                "B. Address reservations",
                "C. Lease time",
                "D. IP helper"
            ],
            answer: "D",
            explanation: "IP helper (DHCP relay) is needed to forward DHCP requests across VLANs. Scope (A) defines addresses, reservations (B) assign fixed addresses, and lease time (C) affects how long addresses are assigned."
        },
        {
            id: 52,
            section: "3.4",
            question: "A network engineer is completing a new VoIP installation, but the phones cannot find the TFTP server to download the configuration files. Which of the following DHCP features would help the phone reach the TFTP server?",
            options: [
                "A. Exclusions",
                "B. Lease time",
                "C. Options",
                "D. Scope"
            ],
            answer: "C",
            explanation: "DHCP options (like option 66) can specify TFTP servers. Exclusions (A) reserve addresses, lease time (B) defines assignment duration, and scope (D) is the address pool."
        },
        {
            id: 53,
            section: "3.4",
            question: "An organization wants to ensure that incoming emails were sent from a trusted source. Which of the following DNS records is used to verify the source?",
            options: [
                "A. TXT",
                "B. AAA",
                "C. CNAME",
                "D. MX"
            ],
            answer: "A",
            explanation: "TXT records store SPF/DKIM/DMARC for email validation. AAAA (B) is IPv6, CNAME (C) is aliases, and MX (D) points to mail servers."
        },
        {
            id: 54,
            section: "3.4",
            question: "An administrator requests a certificate for the company's domain name. In order to prove ownership of the domain, the certificate authority asks the administrator to create a specific DNS record. Which of the following record types is required?",
            options: [
                "A. SOA",
                "B. MX",
                "C. NS",
                "D. TXT"
            ],
            answer: "D",
            explanation: "TXT records verify domain ownership for SSL certificates. SOA (A) defines zone info, MX (B) is for mail, and NS (C) points to DNS servers."
        },
        {
            id: 55,
            section: "3.4",
            question: "A company's Chief Information Security Officer requires that servers and firewalls have accurate time stamps when creating log files so that security analysts can correlate events during incident investigations. Which of the following should be implemented?",
            options: [
                "A. Syslog server",
                "B. SMTP",
                "C. NTP",
                "D. SNMP"
            ],
            answer: "C",
            explanation: "NTP (Network Time Protocol) synchronizes clocks. Syslog (A) collects logs, SMTP (B) is for email, and SNMP (D) monitors devices."
        },
        {
            id: 56,
            section: "3.4",
            question: "A network administrator changed an external DNS to point customers to a new server. Which of the following tools should the administrator use to test the new server's configuration?",
            options: [
                "A. ping",
                "B. tracert",
                "C. tcpdump",
                "D. nslookup"
            ],
            answer: "D",
            explanation: "nslookup queries DNS records directly. Ping (A) tests connectivity, tracert (B) shows routes, and tcpdump (C) captures packets."
        },
        {
            id: 57,
            section: "3.4",
            question: "A server administrator needs to add a record to the company's DNS server to verify ownership of a web domain. The administrator has the record's name and value. Which of the following record types should the administrator use to add the record to the DNS server?",
            options: [
                "A. TXT",
                "B. A",
                "C. PTR",
                "D. CNAME"
            ],
            answer: "A",
            explanation: "TXT records verify domain ownership. A records (B) map names to IPs, PTR (C) is reverse DNS, and CNAME (D) creates aliases."
        },
        // Section 3.5: Network Access and Management Methods
        {
            id: 58,
            section: "3.5",
            question: "Which of the following is a cost-effective advantage of a split-tunnel VPN?",
            options: [
                "A. Web traffic is filtered through a web filter.",
                "B. More bandwidth is required on the company's internet connection.",
                "C. Monitoring detects insecure machines on the company's network.",
                "D. Cloud-based traffic flows outside of the company's network."
            ],
            answer: "D",
            explanation: "Split-tunnel VPNs only route corporate traffic through the VPN, saving bandwidth. Web filtering (A) isn't inherent to split-tunnels, bandwidth needs (B) decrease, and monitoring (C) isn't directly related."
        },
        {
            id: 59,
            section: "3.5",
            question: "Which of the following does a full-tunnel VPN provide?",
            options: [
                "A. Lower bandwidth requirements",
                "B. The ability to reset local computer passwords",
                "C. Corporate inspection of all network traffic",
                "D. Access to blocked sites"
            ],
            answer: "C",
            explanation: "Full-tunnel VPNs route all traffic through corporate networks for inspection. Bandwidth needs (A) increase, password resets (B) aren't VPN functions, and blocked sites (D) might still be blocked."
        },
        {
            id: 60,
            section: "3.5",
            question: "Which of the following is the most secure way to provide site-to-site connectivity?",
            options: [
                "A. VXLAN",
                "B. IKE",
                "C. GRE",
                "D. IPSec"
            ],
            answer: "D",
            explanation: "IPSec provides encryption for site-to-site connections. VXLAN (A) extends Layer 2, IKE (B) is key exchange (part of IPSec), and GRE (C) is tunneling without encryption."
        },
        {
            id: 61,
            section: "3.5",
            question: "An organization has a security requirement that all network connections can be traced back to a user. A network administrator needs to identify a solution to implement on the wireless network. Which of the following is the best solution?",
            options: [
                "A. Implementing enterprise authentication",
                "B. Requiring the use of PSKs",
                "C. Configuring a captive portal for users",
                "D. Enforcing wired equivalent protection"
            ],
            answer: "A",
            explanation: "Enterprise authentication (like 802.1X) identifies individual users. PSKs (B) are shared, captive portals (C) might not track individuals, and WEP (D) is insecure."
        },
        {
            id: 62,
            section: "3.5",
            question: "Which of the following requires network devices to be managed using a different set of IP addresses?",
            options: [
                "A. Console",
                "B. Split tunnel",
                "C. Jump box",
                "D. Out of band"
            ],
            answer: "D",
            explanation: "Out-of-band management uses separate network paths/addresses. Console (A) is direct physical access, split tunnel (B) is VPN routing, and jump box (C) is a secure access host."
        },
        {
            id: 63,
            section: "3.5",
            question: "Which of the following can be used when a server at a remote site is physically unreachable?",
            options: [
                "A. OOB management",
                "B. Crash cart",
                "C. Jump box",
                "D. Console"
            ],
            answer: "A",
            explanation: "Out-of-band (OOB) management provides remote access when primary networks fail. Crash carts (B) are physical carts with tools, jump boxes (C) provide secure access, and console (D) requires physical access."
        },
        {
            id: 64,
            section: "3.5",
            question: "Which of the following can be implemented to add an additional layer of security between a corporate network and network management interfaces?",
            options: [
                "A. Jump box",
                "B. Console server",
                "C. API interface",
                "D. In-band management"
            ],
            answer: "A",
            explanation: "A jump box is a secured host that mediates access to management interfaces. Console servers (B) provide serial access, APIs (C) enable automation, and in-band (D) uses production networks."
        },
        {
            id: 65,
            section: "3.5",
            question: "Which of the following would allow a network administrator to remotely access a secure subnet from a shared, secure workstation?",
            options: [
                "A. Enable SSH through the firewall.",
                "B. Dial into an in-band modem.",
                "C. Connect through a jump host.",
                "D. Configure a site-to-site VPN."
            ],
            answer: "C",
            explanation: "A jump host provides secure intermediary access. SSH through firewalls (A) might be insecure, in-band modems (B) use production networks, and site-to-site VPNs (D) connect networks not workstations."
        },
        {
            id: 66,
            section: "3.5",
            question: "Which of the following allows for interactive, secure remote management of a network infrastructure device?",
            options: [
                "A. SSH",
                "B. VNC",
                "C. RDP",
                "D. SNMP"
            ],
            answer: "A",
            explanation: "SSH provides encrypted command-line access. VNC (B) and RDP (C) are for graphical desktops, and SNMP (D) is for monitoring not interactive management."
        },
        {
            id: 67,
            section: "3.5",
            question: "Which of the following remote connectivity methods is used when data and management traffic use the same network infrastructure?",
            options: [
                "A. In-band",
                "B. Native VLAN",
                "C. Full-tunnel",
                "D. Site-to-site"
            ],
            answer: "A",
            explanation: "In-band management shares production networks. Native VLAN (B) carries untagged traffic, full-tunnel (C) is VPN routing, and site-to-site (D) connects locations."
        },
        {
            id: 68,
            section: "3.5",
            question: "Which of the following is the most cost-effective way for a network administrator to establish a persistent, secure connection between two facilities?",
            options: [
                "A. Site-to-site VPN",
                "B. GRE tunnel",
                "C. VXLAN",
                "D. Dedicated line"
            ],
            answer: "A",
            explanation: "Site-to-site VPNs use existing internet connections. GRE (B) lacks encryption, VXLAN (C) extends Layer 2, and dedicated lines (D) are expensive."
        }
    ];

    // Group questions by section
    const sections = {};
    questions.forEach(q => {
        if (!sections[q.section]) {
            sections[q.section] = [];
        }
        sections[q.section].push(q);
    });

    // Render questions by section
    const container = document.getElementById('questions-container');
    
    for (const [sectionId, sectionQuestions] of Object.entries(sections)) {
        // Add section header
        const sectionHeader = document.createElement('h2');
        sectionHeader.id = `section-${sectionId}`;
        sectionHeader.className = 'section-header';
        
        // Set section title based on ID
        let sectionTitle = '';
        switch(sectionId) {
            case '3.1':
                sectionTitle = '3.1 Organizational Processes and Procedures';
                break;
            case '3.2':
                sectionTitle = '3.2 Network Monitoring Technologies';
                break;
            case '3.3':
                sectionTitle = '3.3 Disaster Recovery (DR) Concepts';
                break;
            case '3.4':
                sectionTitle = '3.4 IPv4 and IPv6 Network Services';
                break;
            case '3.5':
                sectionTitle = '3.5 Network Access and Management Methods';
                break;
            default:
                sectionTitle = `Section ${sectionId}`;
        }
        
        sectionHeader.textContent = sectionTitle;
        container.appendChild(sectionHeader);
        
        // Add questions for this section
        sectionQuestions.forEach(q => {
            const card = document.createElement('div');
            card.className = 'question-card';
            
            // Question text
            const questionText = document.createElement('div');
            questionText.className = 'question-text';
            questionText.textContent = `${q.id}. ${q.question}`;
            card.appendChild(questionText);
            
            // Options list
            const optionsList = document.createElement('ul');
            optionsList.className = 'options-list';
            
            q.options.forEach(opt => {
                const option = document.createElement('li');
                option.className = 'option';
                option.textContent = opt;
                
                // Highlight correct answer
                if (opt.startsWith(q.answer + '.')) {
                    option.classList.add('correct');
                }
                
                optionsList.appendChild(option);
            });
            
            card.appendChild(optionsList);
            
            // Explanation
            const explanation = document.createElement('div');
            explanation.className = 'explanation';
            
            const explanationTitle = document.createElement('div');
            explanationTitle.className = 'explanation-title';
            explanationTitle.textContent = 'Explanation:';
            explanation.appendChild(explanationTitle);
            
            const explanationContent = document.createElement('div');
            explanationContent.className = 'explanation-content';
            explanationContent.textContent = q.explanation;
            explanation.appendChild(explanationContent);
            
            card.appendChild(explanation);
            
            container.appendChild(card);
        });
    }

    // Add dark mode toggle button
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });
    document.body.appendChild(darkModeToggle);
});
