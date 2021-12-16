type TTeam = {
  name: string;
  image: string;
  description: string;
};

type TConcert = {
  date: string;
  startTime: string;
  endTime: string;
  team: TTeam[];
};

export const data: TConcert[] = [
  {
    date: "12.18 (토)",
    startTime: "14:00",
    endTime: "15:00",
    team: [
      {
        name: "노빌레앙상블",
        image: "",
        description: "잔잔한 감동을 전하는 여성 듀오",
      },
      {
        name: "보이저런처",
        image: "",
        description: "모든 생명체가 사라진 지구에 살고 있는 로봇들의 이야기",
      },
      {
        name: "유랑밴드",
        image: "",
        description: "스토리텔링 재즈힙합 밴드",
      },
    ],
  },
  {
    date: "12.19 (일)",
    startTime: "17:00",
    endTime: "18:00",
    team: [
      {
        name: "Connesso.5",
        image: "",
        description: "클래식 음악으로 연결되는 젊은 연주자들",
      },
      {
        name: "놀래놀래",
        image: "",
        description: "예술계의 장르를 파괴하고 싶은 이단아",
      },
      {
        name: "소나무길",
        image: "",
        description: "견고하지만 때로는 누구보다 섬세하게 움직이는 소나무",
      },
    ],
  },
  {
    date: "12.20 (월)",
    startTime: "14:00",
    endTime: "15:00",
    team: [
      {
        name: "이즈콰르텟",
        image: "",
        description: "당신의 하루를 아름답게 수놓을 감성 클래식 콰르텟",
      },
      {
        name: "예지루마림바",
        image: "",
        description: "따뜻한 음색으로 힐링을 주는 편안한 마림바연주자",
      },
      {
        name: "행락객",
        image: "",
        description: "놀거나 즐기러 온 사람들 행락객",
      },
    ],
  },
  {
    date: "12.22 (수)",
    startTime: "20:00",
    endTime: "21:00",
    team: [
      {
        name: "GOOD樂",
        image: "",
        description: "추임새 유발하는 국악 크로스오버 밴드",
      },
      {
        name: "시원하갱",
        image: "",
        description: "새벽공기같은 편안한 어쿠스틱 사운드",
      },
    ],
  },
  {
    date: "12.23 (목)",
    startTime: "19:00",
    endTime: "20:00",
    team: [
      {
        name: "알렌앙상블",
        image: "",
        description: "개성이 뚜렷한 4인 음악가의 따뜻한 클래식 음악",
      },
      {
        name: "베어콰르텟",
        image: "",
        description: "클래식 아티스트 4인이 들려주는 음악 이야기",
      },
    ],
  },
  {
    date: "12.24 (금)",
    startTime: "17:00",
    endTime: "18:00",
    team: [
      {
        name: "까도까도",
        image: "",
        description: "소리를 내는 기은과 움직임을 하는 지혜",
      },
      {
        name: "누룽지",
        image: "",
        description: "긍정적인 기운 듬뿍 신나는 가야금 사운드",
      },
      {
        name: "롱아일랜드",
        image: "",
        description: "즐거움, 낭만, 개성 넘치는 비주얼 5인조",
      },
    ],
  },
  {
    date: "12.25 (토)",
    startTime: "17:00",
    endTime: "18:00",
    team: [
      {
        name: "비디오로즈",
        image: "",
        description: "사이키델릭, 록 전자음악을 지향하는 2인조 아트 그룹",
      },
      {
        name: "신수동3평",
        image: "",
        description: "일상을 노래하는 인디국악",
      },
    ],
  },
];
