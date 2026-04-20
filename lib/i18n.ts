export const dictionaries = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      systems: "Projects",
      contact: "Contact",
      resume: "Resume"
    },
    hero: {
      status: "Status: Open to Work",
      title1: "MOBILE",
      title2: "DEVELOPER.",
      title3: "",
      description: "As an Information Technology graduate, I am seeking a challenging role as a Mobile Developer to leverage my technical skills to build impactful, real-world products while continuously advancing my expertise.",
      btnPrimary: "View Projects",
      btnSecondary: "Get in Touch",
      sysTitle: "Core Competencies",
      initMsg: "[OK] React Native, Expo, JS/TS",
      renderMsg: "[OK] Node.js, NestJS, MongoDB",
      awaitMsg: "> Docker, Git, Postman..."
    },
    experience: {
      title1: "JOURNAL OF ",
      title2: "GROWTH.",
      description: "A chronological mapping of my professional evolution, education, and technical contributions.",
      roles: {
        role1: {
          title: "Mobile Developer Intern",
          company: "FPT IS Company Limited",
          duration: "Sept 2025 - Mar 2026",
          desc: "Built the LightBase SuperApp UI (Android/iOS/Web) using Expo. Developed a MiniApp ecosystem via a Custom SDK, integrated Logto SSO, and utilized Zustand & TanStack Query for state and caching. Maintained CRM system stability before Go-live."
        },
        role2: {
          title: "Information Technology (B.S.)",
          company: "Thủy Lợi University",
          duration: "2021 - 2026",
          desc: "Studied core software engineering principles, algorithms, and application architecture. GPA: 2.71/4.0."
        },
        role3: {
          title: "",
          company: "",
          duration: "",
          desc: ""
        }
      }
    },
    projects: {
      label: "Selected Works",
      title1: "FEATURED ",
      title2: "PROJECTS.",
      viewMore: "View Full Repository →",
      modal: {
        close: "Close",
        confidentialTag: "Corporate Confidential",
        featuresLabel: "Key Responsibilities & Features",
        downloadApk: "Download APK",
        viewGithub: "View Source"
      },
      items: {
        proj1: {
          title: "Vietnamese Agriculture",
          desc: "A comprehensive digital solution to empower farmers by digitalizing cultivation logs, managing schedules, and providing real-time market prices.",
          longDesc: "Leveraged Expo to deliver a unified cross-platform experience. Designed a minimalist interface tailored for farmers. Containerized the entire application environment using Docker and deployed the NestJS backend via Railway CI/CD.",
          features: [
            "Cross-platform App Development with Expo.",
            "Architected robust data flow using Zustand & TanStack Query.",
            "Engineered NestJS backend with MongoDB RESTful APIs.",
            "Integrated Firebase ecosystem for real-time Push Notifications.",
            "Dockerized deployment and CI/CD pipelines."
          ],
          isConfidential: false,
          apkLink: "/app-release.apk",
          githubLink: "https://github.com/cuongtran392003/agricultureVN",
          logoSrc: "/agri-logo.png",
          imageSrc: "/agri-screenshot.png"
        },
        proj2: {
          title: "LightBase SuperApp & MiniApp",
          desc: "Developed the main UI for the SuperApp and integrated WebView-based MiniApps. Implemented SSO using Logto to seamlessly synchronize authentication between the SuperApp and the Task Management MiniApp.",
          longDesc: "A challenging enterprise-grade project at FPT IS involving complex architectural patterns for managing independent ecosystem apps within a single host environment.",
          features: [
            "Designed and built the LightBase SuperApp interface across all platforms.",
            "Developed an independent MiniApp ecosystem via Custom SDK.",
            "Integrated Logto for Single Sign-On (SSO) ensuring a seamless login experience.",
            "Reduced UI re-renders and memory footprint via Zustand."
          ],
          isConfidential: true,
          apkLink: "",
          githubLink: ""
        },
        proj3: {
          title: "CRM Mobile Maintenance",
          desc: "Maintained the frontend interface for the Customer Relationship Management system. Focused on resolving UI/UX bugs, optimizing data rendering, and ensuring high display stability.",
          longDesc: "Took responsibility for CRM quality control, collaborating tightly with the Testing team to eliminate system errors thoroughly before Go-live releases.",
          features: [
            "Ensured high system stability under production load.",
            "Responded to and implemented rapid feature change requests.",
            "Optimized caching logic and data rendering.",
            "Worked closely with QA to streamline release cycles."
          ],
          isConfidential: true,
          apkLink: "",
          githubLink: ""
        }
      }
    },
    contact: {
      title1: "LET'S BUILD ",
      title2: "SYSTEMS TOGETHER.",
      description: "I am ready to accept incoming connections for the next quarter. Send a ping to establish a secure connection.",
      form: {
        name: "Name",
        namePlace: "John Doe",
        email: "Email",
        emailPlace: "john@domain.com",
        message: "Message Payload",
        messagePlace: "Initialize communication...",
        submit: "Transmit Data"
      },
      info: {
        email: "Email Address",
        github: "GitHub Repository",
        linkedin: "Phone Number",
        sysStatus: "SYSTEM STATUS: ONLINE",
        sysDesc: "Waiting for new challenges..."
      }
    },
    footer: {
      rights: "All rights reserved. System built by Tran Manh Cuong."
    }
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      systems: "Dự án",
      contact: "Liên hệ",
      resume: "Hồ sơ"
    },
    hero: {
      status: "Trạng thái: Sẵn sàng làm việc",
      title1: "LẬP TRÌNH VIÊN",
      title2: "MOBILE.",
      title3: "",
      description: "Là một Cử nhân Công nghệ Thông tin, tôi không ngừng tìm kiếm vai trò Lập trình viên Mobile để tận dụng các kỹ năng công nghệ, xây dựng các sản phẩm thực tế có sức ảnh hưởng, đồng thời nâng cao chuyên môn của bản thân.",
      btnPrimary: "Xem Dự Án",
      btnSecondary: "Liên Hệ Ngay",
      sysTitle: "Năng lực Cốt lõi",
      initMsg: "[OK] React Native, Expo, JS/TS",
      renderMsg: "[OK] Node.js, NestJS, MongoDB",
      awaitMsg: "> Docker, Git, Postman..."
    },
    experience: {
      title1: "HÀNH TRÌNH ",
      title2: "PHÁT TRIỂN.",
      description: "Bản đồ theo thời gian về sự tiến hóa nghề nghiệp, quá trình học tập và những đóng góp kỹ thuật của tôi.",
      roles: {
        role1: {
          title: "Thực tập sinh Lập trình Mobile",
          company: "FPT IS (Chi nhánh TP.HCM)",
          duration: "09/2025 - 03/2026",
          desc: "Xây dựng giao diện LightBase SuperApp (Android/iOS/Web) bằng Expo. Phát triển hệ sinh thái MiniApp qua Custom SDK, tích hợp Logto SSO, xử lý state bằng Zustand & TanStack Query. Đảm nhận bảo trì frontend hệ thống CRM."
        },
        role2: {
          title: "Cử nhân Công nghệ Thông tin",
          company: "Đại học Thủy Lợi",
          duration: "2021 - 2026",
          desc: "Nghiên cứu các nguyên lý cốt lõi của kỹ thuật phần mềm, cấu trúc dữ liệu và kiến trúc nền tảng ứng dụng. Điểm trung bình (GPA): 2.71/4.0."
        },
        role3: {
          title: "",
          company: "",
          duration: "",
          desc: ""
        }
      }
    },
    projects: {
      label: "Dự án Nổi bật",
      title1: "DỰ ÁN ",
      title2: "THỰC TẾ.",
      viewMore: "Xem Toàn bộ Kho lưu trữ Github →",
      modal: {
        close: "Đóng",
        confidentialTag: "Bảo mật Nội bộ Tập đoàn",
        featuresLabel: "Vai trò & Chức năng Chính",
        downloadApk: "Tải cài đặt APK",
        viewGithub: "Xem Mã Nguồn"
      },
      items: {
        proj1: {
          title: "Vietnamese Agriculture",
          desc: "Giải pháp chuyển đổi số toàn diện hỗ trợ nông dân: số hóa nhật ký canh tác, quản lý lịch trình mùa màng và cập nhật giá cả nông sản theo thời gian thực.",
          longDesc: "Dự án thiết kế nhắm tới người dùng không sành công nghệ (nông dân), sở hữu giao diện tinh gọn, tính tương phản cao. Backend được đóng gói toàn diện bằng Docker và triển khai CI/CD tự động lên Railway.",
          features: [
            "Phát triển ứng dụng đa nền tảng bằng giải pháp Expo.",
            "Tối ưu hóa quản lý luồng dữ liệu thông qua Zustand & TanStack Query.",
            "Thiết kế hệ thống Backend với NestJS và MongoDB RESTful API.",
            "Tích hợp hệ sinh thái Firebase xử lý Thông báo đẩy (Push Notifications) thời gian thực.",
            "Viết Docker Container và quy trình CI/CD Deploy tự động."
          ],
          isConfidential: false,
          apkLink: "/app-release.apk",
          githubLink: "https://github.com/cuongtran392003/agriculture-vn",
          logoSrc: "/agri-logo.png",
          imageSrc: "/agri-screenshot.png"
        },
        proj2: {
          title: "LightBase SuperApp & MiniApp",
          desc: "Phát triển giao diện chính cho SuperApp và tích hợp các MiniApp qua WebView. Xây dựng đồng bộ đăng nhập (SSO) bằng Logto để luân chuyển xác thực mượt mà giữa SuperApp và MiniApp quản lý công việc.",
          longDesc: "Một dự án quy mô doanh nghiệp tại FPT IS, rèn luyện kỹ năng phân tích kiến trúc độc lập khi phải nhúng các môi trường MiniApp vào trong một khung SuperApp có sẵn.",
          features: [
            "Trực tiếp thiết kế và code giao diện LightBase UI trên mọi nền tảng thiết bị.",
            "Phát triển hệ sinh thái MiniApp chạy độc lập thông qua Custom SDK.",
            "Khắc phục sự cố đăng nhập liên tục bằng cách tích hợp quản trị danh tính Single Sign-On (Logto).",
            "Sử dụng Zustand giúp ứng dụng giảm thiểu Redraw Rendering và tiết kiệm bộ nhớ."
          ],
          isConfidential: true,
          apkLink: "",
          githubLink: ""
        },
        proj3: {
          title: "Bảo trì CRM Frontend",
          desc: "Đảm nhận bảo trì giao diện người dùng (Frontend) cho hệ thống Quản lý Quan hệ Khách hàng (CRM). Tập trung xử lý lỗi UI/UX, tối ưu hóa quá trình hiển thị dữ liệu.",
          longDesc: "Quá trình làm việc liên tục cường độ cao với đội ngũ Kiểm thử chất lượng (QA/QC) để đảm bảo độ tin cậy tuyệt đối cho ứng dụng trước các đợt phát hành phiên bản mới (Go-Live).",
          features: [
            "Chịu trách nhiệm trực tiếp về chất lượng đầu ra giao diện.",
            "Đảm nhận việc xử lý các yêu cầu thay đổi tính năng từ khách hàng chuyên nghiệp.",
            "Gia tăng hiệu năng Data Optimization khi tải danh sách khách hàng.",
            "Dung hòa và phối hợp mật thiết với Tester Team trong Sprint nội bộ."
          ],
          isConfidential: true,
          apkLink: "",
          githubLink: ""
        }
      }
    },
    contact: {
      title1: "CÙNG KIẾN TẠO ",
      title2: "SẢN PHẨM MỚI.",
      description: "Tôi luôn sẵn sàng đón nhận các thử thách kỹ thuật và xây dựng hệ thống mới. Hãy để lại lời nhắn để bắt đầu kết nối.",
      form: {
        name: "Họ Tên",
        namePlace: "Nguyễn Văn A",
        email: "Email",
        emailPlace: "nguyenvana@domain.com",
        message: "Nội dung Gói tin",
        messagePlace: "Khởi tạo kết nối...",
        submit: "Truyền Dữ Liệu"
      },
      info: {
        email: "Email Liên Hệ",
        github: "Kho lưu trữ GitHub",
        linkedin: "Số Điện Thoại",
        sysStatus: "TRẠNG THÁI: TRỰC TUYẾN",
        sysDesc: "Sẵn sàng đón nhận cơ hội việc làm tiếp theo."
      }
    },
    footer: {
      rights: "Mọi quyền được bảo lưu. Thiết kế và Lập trình bởi Trần Mạnh Cường."
    }
  }
};
