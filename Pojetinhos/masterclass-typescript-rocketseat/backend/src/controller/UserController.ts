import { Request, Response } from "express";
import EmailService from "../services/emailService";

const users = [{ name: "Junior", email: "jr@email.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: "irineu", email: "irineu@irineu.com" },
      message: { subject: "Teste", body: "seja bem-vindo" },
    });

    return res.send();
  },
};
